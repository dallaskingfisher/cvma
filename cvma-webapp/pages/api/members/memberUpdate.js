import { connectDatabase } from "../../../helpers/db-util";



async function handler(req, res) {

  const client = await connectDatabase();
    const collection = client.db().collection('members');
    const data = await collection.find({}).toArray();
    
    res.status(200).json({ data})

  if (req.method === "POST") {
    const memberId = req.body.memberId;
    const roadName = req.body.roadNameUpdate;
    const cellPhone = req.body.cellPhoneUpdate;
    const homePhone = req.body.homePhoneUpdate;
    const address = req.body.addressUpdate;
    const city = req.body.cityUpdate;
    const state = req.body.stateUpdate;
    const zip = req.body.zipUpdate;
    const iceName = req.body.iceNameUpdate;
    const iceNumber = req.body.iceNumberUpdate;
    const email = req.body.emailUpdate;

    const client = await connectDatabase();
    const collection = client.db().collection("members");
    const updateUser = await collection.updateOne(
      { memberId: memberId },
      {
        $set: {
          roadName: roadName,
          address: address,
          city: city,
          state: state,
          zip: zip,
          iceName: iceName,
          iceNumber: iceNumber,
          cellPhone: cellPhone,
          homePhone: homePhone,
          email: email
        },
      }
    );
    res.status(200).json({message: updateUser});
  }
}
export default handler;