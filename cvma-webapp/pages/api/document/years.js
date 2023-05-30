import {connectDatabase } from '../../../helpers/db-util';

async function handler(req, res) {
    
        try{
        const client = await connectDatabase();
        const collection = client.db(process.env.DATABASE).collection('years');
        const data = await collection.find({}).toArray();
       
        const yearsArray = []
        Object.entries(data).forEach(([_,value]) => yearsArray.push(value.year))
        res.status(200).json({yearsArray})
        } catch (err) {console.log(err)}
    
}
export default handler;