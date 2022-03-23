import { connectDatabase } from "../../../helpers/db-util";


async function handler(req, res) {
  if (req.method === "GET") {
      const client = await connectDatabase();
      const collection = client.db().collection('events');
      const data = await collection.find({}).toArray();
      res.status(200).json({data})
  }
  if (req.mehtod === "POST") {
    const title = req.body.title;
    const description = req.body.description;
    const address = req.body.addressOne + "- " + req.body.addressTwo;
    const date = req.body.date;
    const feature = req.body.feature;
    const image = req.body.image;

    const client = await connectDatabase();

    const addEvent = client.db().collection("events");

    const response = addEvent.insertOne({
      title: title,
      description: description,
      address: address,
      date: date,
      isFeatured: feature,
      image: image,
    });

    if (response.ok) {
      res.status(200).json({ message: "Event Added" });
    }

    res.status(422).json({ message: "Error creating evnet" });
  }
}

export default handler;
