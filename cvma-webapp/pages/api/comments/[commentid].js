import {connectDatabase, insertDocument, findComments} from '../../../helpers/db-util';

async function handler(req, res) {
  const eventId = req.query.commentid;
  if (req.method === "POST") {
    const { email, name, text } = req.body;
    let client;
    let result;
   try {
    client = await connectDatabase();
   } catch (error) {
     res.status(500).json({message:'Database Connection Failed'})
   }

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      client.close();
      res.status(422).json({ message: "Invalid Input" });
      return;
    }
    const newComment = {
      eventId: eventId,
      email: email,
      name: name,
      text: text,
    };
    try{
     result = await insertDocument(client,'comments', newComment);
     console.log(result);
     res.status(201).json({ message: result.message });
     client.close();
    } catch (error) {
      res.status(500).json({message: 'Failed to insert Document'})
      client.close;
      return;
    }
    
 
  
  }

  if (req.method === "GET") {
    const eventId = req.query.commentid;
    let mongo;
    let documents;

   /*  connectDatabase().then((client) => {
      findComments(client, 'comments', {_id: -1})
    }).catch((err) => {message: 'comment failed.'})*/
   try{
      mongo = await connectDatabase();
    } catch(error){
      res.status(500).json({message:'Failed to Connect to Database'})
      return;
    }

    try{
      documents = await findComments(mongo,'comments',{_id: -1}, {eventId: eventId})
      res.status(200).json({ comments: documents });
      client.close();

    } catch (error) {
      res.status(500).json({message: 'Faild to retrive documents'})
      client.close();
      return;
    } 
 
   

   
   
  }
}

export default handler;
