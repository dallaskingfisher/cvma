import { connectDatabase } from  '../../../helpers/db-util';

async function handler (req, res) {
if(req.method === 'PATCH'){
  const memberId = req.body.memberId;
  const dues = req.body.dues;
  const duesPayment = req.body.duesPayment;
  
  const client = await connectDatabase();
  const collection = client.db().collection('members');
  const update = await collection.updateOne({memberId: memberId},{
    $set: {
      dues: dues,
      duesPayment: duesPayment
    }
  })
  console.log(update)
  console.log(memberId)
  console.log(dues)
  console.log(duesPayment)
  res.status(201).json({update})
}
}

export default handler;