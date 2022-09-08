import { connectDatabase } from "../../../helpers/db-util";

async function handler(req, res) {
  if (req.method === "POST") {
    const title = req.body.title;
    const date = req.body.date;
    const address = req.body.address;
    const city = req.body.city;
    const state = req.body.state;
    const eventdes = req.body.eventdes;
    const publicEvent = req.body.publicEvent;
    const checkedEvent = req.body.checkedEvent;

     const addresses = address.split(' ');

    const eventObject = {
      title: title,
      date: date,
      streetNumber: addresses[0],
      street: addresses[1],
      city: city,
      state: state,
      eventdes: eventdes,
      publicEvent: publicEvent,
      checkedEvent: checkedEvent
    };
    console.log(eventObject);
    const client = await connectDatabase();
    const collection = client.db().collection("events");
    await collection.insertOne(eventObject);
    res.status(201).json({message: "Event Added"})
    client.close();
  }


}

export default handler;
