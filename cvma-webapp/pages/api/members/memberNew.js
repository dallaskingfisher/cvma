import { connectDatabase } from "../../../helpers/db-util";

async function handler(req, res) {
  if (req.method === "POST") {
    const memberId = req.body.memberId;
    const roadName = req.body.roadNameUpdate;
    const cellPhone = req.body.cellPhoneUpdate;
    const homePhone = req.body.homePhoneUpdate;
    const iceName = req.body.iceNameUpdate;
    const iceNumber = req.body.iceNumberUpdate;
    const address = req.body.addressUpdate;
    const city = req.body.cityUpdate;
    const state = req.body.stateUpdate;
    const zip = req.body.zipUpdate;
    const email = req.body.emailUpdate;
    const firstName = req.body.firstNameUpdate;
    const lastName = req.body.lastNameUpdate;
    const role = req.body.role;

    const client = await connectDatabase();
    const collection = client.db().collection("members");
    const data = collection.findOne({
      memberId: memberId,
     
    });
    const user = data.json();

    if (user.memberId === memberId) {
      res.status(200).json({ message: "Member Exists!" });
    }
    collection.insertOne({ memberId: memberId,
        firstName: firstName,
        lastName: lastName,
        roadName: roadName,
        address: address,
        city: city,
        state: state,
        zip: zip,
        email: email,
        cellPhone: cellPhone,
        homePhone: homePhone,
        iceName: iceName,
        iceNubmer: iceNumber,
        role: role, });

    res.status(200).json({message: 'User Added'})
     client.close();
  }
}

export default handler;
