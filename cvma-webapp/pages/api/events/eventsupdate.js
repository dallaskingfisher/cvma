import { connectDatabase } from "../../../helpers/db-util";

async function handler(req, res) {
  if (req.method === "POST") {
    const title = req.body.title;
    const description = req.body.description;
    const address = req.body.addressOne + "- " + req.body.addressTwo;
    const date = req.body.date;
    const feature = req.body.feature;
    const image = req.body.image;

    const client = await connectDatabase();

    const addEvent = client.db().collection("events");

    addEvent.insertOne({
      title: title,
      description: description,
      address: address,
      date: date,
      isFeatured: feature,
      image: image,
    });

    res.status(200).json({ message: "Event Added" });
  }
}
export default handler;
