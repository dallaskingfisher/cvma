import { connectDatabase } from "../../../helpers/db-util";
import  {ObjectId}  from "mongodb";

async function handler(req, res) {
  if (req.method === "PATCH") {
    const id = req.body.id;
    const publicEvent = req.body.publicEvent;
    const checkedEvent = req.body.checkedEvent;
    const eventId = ObjectId(id);
    console.log(eventId);
    console.log(id);
    console.log(publicEvent);
    const client = await connectDatabase();
    const collection = client.db().collection("events");
    const update = await collection.updateOne(
      { _id: eventId },
      { $set: { publicEvent: publicEvent, checkedEvent: checkedEvent } }
    );
    console.log(update);
  }

  const client = await connectDatabase();
  const collection1 = client.db().collection("events");
  const data = await collection1
    .find({})
    .sort({ memberId: 1 })
    .collation({ locale: "en_US", numericOrdering: true })
    .toArray();
  res.status(200).json({ data });
}
export default handler;
