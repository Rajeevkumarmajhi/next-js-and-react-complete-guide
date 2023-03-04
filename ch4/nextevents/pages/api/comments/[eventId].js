import { MongoClient } from 'mongodb';

const url = 'mongodb+srv://rajeevkumarmajhi:Gamerboy7@cluster0.4sbdhxa.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);
const dbName = 'events';

async function handler(req, res) {

    const eventId = req.query.eventId;
    
    if(req.method == "POST"){
        await client.connect();
        const db = client.db(dbName);

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
        
        const result = await db.collection('comments').insertOne( newComment );

        newComment.id = result.insertedId;

        res.status(201).json({message:"Comment saved successfully",comment: newComment});
        return;
    }

    if(req.method == "GET"){

        await client.connect();
        const db = client.db(dbName);

        const documents = await db.collection('comments').find().sort({ _id: -1 }).toArray();

        res.status(200).json({ comments: documents });
    }
}

export default handler;