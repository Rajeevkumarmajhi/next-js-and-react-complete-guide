import { MongoClient } from 'mongodb';

const url = 'mongodb+srv://rajeevkumarmajhi:Gamerboy7@cluster0.4sbdhxa.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);
const dbName = 'events';

export default async function handler(req, res) {
    try{
        await client.connect();
    }catch(error){
        res.status(500).json({ message: "DB cannot be connected"});
        return;
    }

    if (req.method === "POST") {
        const userEmail = req.body.email;
        if (!userEmail || !userEmail.includes('@')) {
            res.status(422).json({ message: 'Invalid Email Address' });
            return;
        }
        try{
            let db = client.db(dbName);
            await db.collection('newsletters').insertOne({email:userEmail});
        }catch(error){
            res.status(500).json({message:"Data cannot be inserted!"});
            return;
        }

        client.close();
        res.status(201).json({ message: 'Signed Up!' })
    }
}