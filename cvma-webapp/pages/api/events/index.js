import { connectDatabase } from "../../../helpers/db-util";


async function handler(req, res) {
  if (req.method === "GET") {
    const client = await connectDatabase();
    const collection = client.db().collection('events');
    const data = await collection.find({}).toArray();
    res.status(200).json({data})
}
}

export default handler;
