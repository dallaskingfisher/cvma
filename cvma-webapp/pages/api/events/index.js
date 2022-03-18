import { connectDatabase } from '../../../helpers/db-util';
import fs from 'fs';

async function handler(req, res) {
    if(req.method === 'GET') {

    }
    if(req.mehtod === 'POST') {
        const title = req.body.title 
        const description = req.body.description;
        const address = req.body.addressOne + '- ' + req.body.addressTwo;
        const date = req.body.date;
        const feature = req.body.feature;
        const image = req.body.image;

        const config = fs.readFileSync('./setting.json');

        const eventObject = JSON.parse(config);

        const eventId = eventObject.eventId++;


      
        const client = await connectDatabase();
        
        const addEvent = client.db().collection('events');

        const response = addEvent.insertOne({
            id: eventId,
            title: title,
            description: description,
            address: address,
            date: date,
            isFeatured: feature,
            image: image

        })
        
        if(response.ok) {
            const data = JSON.stringify(eventId);
            fs.writeFileSync(data, 'utf8');
            res.status(200).json({message: 'Event Added'})
        }
        
        res.status(422).json({message: 'Error creating evnet'})

    }

}

export default handler;