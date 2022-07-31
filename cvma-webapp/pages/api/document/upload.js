import {connectDatabase } from '../../../helpers/db-util';

async function handler(req, res ) {

    if(req.method === 'POST') {

        const category = req.body.category;
        const month = req.body.month;
        const year = req.body.year;
        const title = req.body.title;
        const location = req.body.location;

        if( year === '') {
            res.status(406).json({message:"Year Required"});
        } else if (title === '') {
            res.status(406).json({message:"Title Required"});
        } else if (location === null || location === undefined) {
            res.status(406).json({message:"File Required"});
        } else {
            const client = await connectDatabase();
            console.log('connect to data base ')
            const collection = client.db().collection('documents');
             await collection.insertOne({
                category: category,
                month: month,
                year: year,
                title: title,
                location: location
            });
            res.status(200).json({message:'File Uploaded'});

            client.close();

       }

    }
}

export default handler;