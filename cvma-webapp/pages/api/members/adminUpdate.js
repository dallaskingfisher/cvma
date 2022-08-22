import { connectDatabase } from "../../../helpers/db-util";

async function handler(req, res) {
  if (req.method == "POST") {
    const memberId = req.body.memberId;
    const firstName = req.body.firstNameUpdate;
    const roadName = req.body.roadNameUpdate;
    const lastName = req.body.lastNameUpdate;
    const address = req.body.addressUpdate;
    const city = req.body.cityUpdate;
    const zip = req.body.zipUpdate;
    const state = req.body.stateUpdate;
    const email = req.body.emailUpdate;
    const iceName = req.body.iceNameUpdate;
    const iceNumber = req.body.iceNumberUpdate;
    const homePhone = req.body.homePhoneUpdate;
    const cellPhone = req.body.cellPhoneUpdate;
    const insurance = req.body.insurance;
    const registration = req.body.registration;
    const driverLicence = req.body.driverLicence;
    const role = req.body.roleUpdate;

    const client = await connectDatabase();
    const collection = client.db().collection("members");
    const update = await collection.updateOne(
      { memberId: memberId },
      { $set: {firstName: firstName,
         roadName: roadName, 
        lastName: lastName, 
        address: address, 
        city: city, 
        zip: zip, 
        state: state,
        email: email,
        iceName: iceName,
        iceNumber: iceNumber,
        homePhone: homePhone,
        cellPhone: cellPhone,
        insurance: insurance,
        registration: registration,
        driverLicence: driverLicence,
        role: role
    } }
    );
    res.status(201).json({update})
  }
}
export default handler;
