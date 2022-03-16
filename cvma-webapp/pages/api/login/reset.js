import { connectDatabase } from "../../../helpers/db-util";
import { hashPasswd } from "../../../helpers/api-util";

async function handler(req, res) {
  if (req.method === "POST") {
    const memberNumber = req.body.memberNumber;
    const email = req.body.email;
    const passwd = req.body.passwd;
    const passwdVerify = req.body.passwdVerify;
    const address = req.body.address

    if (
      memberNumber.includes("FM") ||
      memberNumber.includes("AUX") ||
      memberNumber.includes("S") ||
      memberNumber.includes("SAUX")
    ) {
      res.status(422).json({message: "Please use the member number prefix FM, AUX, S, SAUX"})
    }

    if (!email.includes("@")) {
      res.status(422).json({message: 'Must be a valid email'})
    }
    if (address.trim() === 0) {
    res.status(422).json({message: "Please enter a valid address"})
    }
    if (passwd !== passwdVerify) {
    res.status(422).json({message:'Passsword do not Match'})
    }
    if (!passwd.length >= 8) {
    res.status(422).json({message:'Password Must be at least 8 Charterters long'})
    }

    const client = await connectDatabase();

    const database = client.db().collection('members');

    const user = await database.findOne({memberId: memberNumber})

    //do member validation on the email and the address 
    // to verify that they are users.

    if(email.toLowerCase() !== user.email.toLowerCase()){
        res.status(422).json({message: 'Email must match Account'})
    }

    if(address.trim().toLowerCase() !== user.address.trim().toLowerCase()){
        res.status(422).json({message: 'Address does not match Account'})
    }

    const hashedPassword = await hashPasswd(passwd);

    await database.updateOne({memberId: memberNumber}, {$set: {password: hashedPassword}})


  }
}

export default handler;