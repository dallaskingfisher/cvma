import { connectDatabase } from "../../../helpers/db-util";

async function handler (req, res){
if(req.method === "DELETE"){
    const memberId = req.body.memberId

    const client = await connectDatabase()
    const collection = client.db().collection('members');
    const deleteUser = await collection.deleteOne({memberId: memberId});

    res.status(203).json({deleteUser})
}
}

export default handler;