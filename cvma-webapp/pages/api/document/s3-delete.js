import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "../../../helpers/api-util";
import { connectDatabase } from "../../../helpers/db-util";

//https://combatveteransmotorcycleassocaition.s3.amazonaws.com/next-s3-uploads/284bbc12-94f1-44f7-b704-0e3eb941d6dc/years.js

async function handler(req, res) {
  if (req.method == "DELETE") {
    const location = req.body.location;
    const bucket = "combatveteransmotorcycleassocaition";
    const key = location.slice(71);

    const bucketParams = { Bucket: bucket, Key: key };

    await s3Client.send(new DeleteObjectCommand(bucketParams));

    const client = await connectDatabase();
    const collection = client.db().collection("documents");
    await collection.deleteOne({ location: location });
    res.status(200).json({ message: "DELETED, Please Refresh" });
  }
}

export default handler;
