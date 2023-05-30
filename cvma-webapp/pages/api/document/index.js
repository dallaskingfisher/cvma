import { connectDatabase } from "../../../helpers/db-util";

async function handler(req, res) {
  try {
    const client = await connectDatabase();
    const collection = client.db(process.env.DATABASE).collection("documents");
    const data = await collection.find({}).toArray();
    const docsArray =[];
    for (let i =0; i < data.length; i++){
        docsArray.push([data[i].category, data[i].month, data[i].year, data[i].title, data[i].location])
    }
    
    // console.log(docsArray);
    res.status(200).json({ docsArray });
  } catch (err) {
    console.log(err);
  }
}

export default handler;
