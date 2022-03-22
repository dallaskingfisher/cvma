import { connectDatabase } from '../../../helpers/db-util'

async function handler(req, res){



 if(req.method === 'POST')   {
 const memberId = req.body.name;
 const client = await connectDatabase();
 const collection = client.db().collection('members');
 const member = await collection.findOne({ memberId: memberId})

 res.status(200).json({member})
 }

}

export default handler;