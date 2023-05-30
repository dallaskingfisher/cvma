import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "../../../helpers/api-util";
import { connectDatabase } from "../../../helpers/db-util";

//https://cvmadocs.s3.us-east-1.amazonaws.com/next-s3-uploads/b13571b2-f373-4cad-b09a-d2881e4d2b76/ChapterMembers.xlsx

async function handler(req, res) {
  if (req.method == "DELETE") {
    const location = req.body.location;
    const bucket = "cvmadocs";
    const key = location.slice(44);

    const bucketParams = { Bucket: bucket, Key: key };
    try{
   const response = await s3Client.send(new DeleteObjectCommand(bucketParams));
    console.log(response)
    } catch(err) {
      console.log("Error", err)
    }

    const client = await connectDatabase();
    const collection = client.db(process.env.DATABASE).collection("documents");
    await collection.deleteOne({ location: location });
    res.status(200).json({ message: "DELETED, Please Refresh" });
  }
}

export default handler;
