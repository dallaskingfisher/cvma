import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { connectDatabase } from "../../../helpers/db-util";
import { verifyPasswd } from "../../../helpers/api-util";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const client = await connectDatabase();

        const usersCollection = client.db().collection("members");

       
        const user = await usersCollection.findOne({
          memberId: credentials.memberNumber
        });

        if (!user) {
          client.close();
          throw new Error("No User Found");
        }
        const isValid = await verifyPasswd(credentials.password, user.password);

        if (!isValid) {
          client.close();
          throw new Error("Invalid Password");
        }
        client.close();
        // =================================================================
        // I might have to store the data for the token above the client.close() method
        // if so will store an object.
        //================================================================
        return {
          memberId: user.memberId,
          role: user.role,
          firstName: user.firstName,
          lastName: user.lastName,
          roadName: user.roadName,
          address: user.address,
          city: user.city,
          state: user.state,
          zip: user.zip,
          email: user.email,
          cellPhone: user.cellPhone,
          homePhone: user.homePhone,
          iceName: user.iceName,
          iceNumber: user.iceNumber
        };
      },
    }),
  ],
});
