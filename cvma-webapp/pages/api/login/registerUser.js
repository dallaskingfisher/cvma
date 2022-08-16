import { connectDatabase } from "../../../helpers/db-util";
import { hashPasswd } from "../../../helpers/api-util";

async function handler(req, res) {
  if (req.method === "POST") {
    const memNumber = req.body.memNumber;
    const email = req.body.email;
    const passwd = req.body.passwd;
    const passwdVerify = req.body.passwdVerify;

    if (
      memNumber.includes("FM") ||
      memNumber.includes("AUX") ||
      memNumber.includes("S") ||
      memNumber.includes("SAUX")
    ) {
    } else {
      res
        .status(422)
        .json({ message: "Member number must include FM, AUX, S, SAUX" });
      return;
    }

    if (!email.includes("@")) {
      res.status(422).json({ message: "Not a valid Email" });
      return;
    }

    if (passwd !== passwdVerify) {
      res.status(422).json({ message: "Passwords do not match" });
      return;
    }

    if (!passwd.length >= 8) {
      res
        .status(422)
        .json({ message: "Password Must be at least 8 characters long" });
      return;
    }

    const client = await connectDatabase();

    const database = client.db().collection("members");

    const user = await database.findOne({ memberId: memNumber });

    if (user === null) {
       client.close();
      res.status(422).json({ message: "Member does not Exist" });
    }
    if (email.toLowerCase() !== user.email.toLowerCase()) {
      client.close();
      res.status(422).json({ message: "Email Dose Not Match" });
    }
    console.log(user.password)
   if (user.password === "") {
   
    try{  const hashedPassword = await hashPasswd(passwd);

      const message = await database.updateOne(
        { memberId: memNumber },
        { $set: { password: hashedPassword } }
      );
  
      res.status(200).json({ message: message});
    }catch (err) {
      console.log("Error", err);
    }
  
  }
 
      
    } else {
      client.close();
      res
        .status(422)
        .json({
          message: "User already Registered Please login with current password",
        });
    }

   

}
export default handler;
