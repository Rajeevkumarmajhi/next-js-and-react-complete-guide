import { MongoClient } from 'mongodb';

const url = 'mongodb+srv://rajeevkumarmajhi:Gamerboy7@cluster0.4sbdhxa.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);
const dbName = 'events';

async function handler(req, res) {

    const eventId = req.query.eventId;
    await client.connect();
        const db = client.db(dbName);

    if(req.method == "POST"){

        const {email,name,text} = req.body;

        if(!email.includes('@') || !name || name.trim === "" || !text || text.trim === "" ){
            res.status(422).json({ message: 'Invalid Input'});
            return;
        }
        
        const newComment = {
            email,
            name,
            text,
            eventId
        }
        
        const result = await db.collection('comments').insertOne({ newComment });

        newComment.id = result.insertedId;

        res.status(201).json({message:"Comment saved successfully",comment: newComment});
    }

    if(req.method == "GET"){
        const dummyList = [
            { id:'c1', name: 'Max', text: 'A first comment!' },
            { id:'c2', name: 'Rajeev', text: 'A second comment!' },
        ];

        res.status(200).json({ comments: dummyList });
    }
}

export default handler;