import nextConnect from "next-connect";
import multer from "multer";
import { s3Upload } from "../../helpers/s3upload";
import { connectDatabase } from "../../helpers/db-util";

const handler = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry someting happend ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method "${req.method}" not allowed` });
  },
});

handler.use(multer().any());

handler.post(async (req, res) => {
  const category = req.body.category;
  const client = await connectDatabase();

  if (category === "meetingMinutes" || category === "cebMinutes") {
    //ADDING YEAR INFOR TO S3 UPLOAD 

     const year = req.body.year
 
      
      const yearCollection = client.db().collection('years');
      const dataYear = await yearCollection.findOne({year: year})
      if(dataYear === null ){
         await yearCollection.insertOne({year: year});
      }
     
    //________________________________________________________________
    const bucket = "cvmadocuments";
    const key = `${category}/${req.body.year}/${req.body.month}/${req.body.name}`;
    const body = req.files.buffer;
 
    const bucketParams = { Bucket: bucket, Key: key, Body: body };
    console.log(body)
   // const results = await s3Upload(bucketParams);
    console.log(results)
    let Document = {
      category: category,
      month: req.body.month,
      fileName: req.body.fileName,
      year: req.body.year,
      location: `https://${process.env.AWS_BUCKET}.s3.amazonaws.com/${key}`,
    };
    console.log(Document);
    try {
      const test = await client
        .db()
        .collection("documents")
        .insertOne(Document);
      client.close();
      console.log(test);
    } catch (err) {
      console.log(err);
    }
  } else {
    const date = new Date();
    const currentDate = `${date.getMonth() + 1}-${date.getFullYear()}`;
    console.log(currentDate);
    const bucket = "cvmadocuments";
    const key = `${category}/${currentDate + req.body.fileName}`;
    const body = req.files.buffer;
    const bucketParams = { Bucket: bucket, Key: key, Body: body };
    await s3Upload(bucketParams);
    console.log(results);
  }
  let Document = {
    category: category,
    month: req.body.month,
    year: req.body.year,
    fileName: req.body.fileName,
    location: `https://${process.env.AWS_BUCKET}.s3.amazonaws.com/${key}`,
  };
  try {
    const test = await client.db().collection("documents").insertOne(Document);
    client.close();
    console.log(test);
  } catch (err) {
    console.log(err);
  }
  res.status(200).json({ results });
});

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
