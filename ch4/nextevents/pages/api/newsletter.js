import { MongoClient } from 'mongodb';

const url = 'mongodb+srv://rajeevkumarmajhi:Gamerboy7@cluster0.4sbdhxa.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);
const dbName = 'newsletter';

export default async function handler(req, res) {
    
    await client.connect();
    const db = client.db(dbName);

    if (req.method === "POST") {
        const userEmail = req.body.email;
        if (!userEmail || !userEmail.includes('@')) {
            res.status(422).json({ message: 'Invalid Email Address' });
            return;
        }
        await db.collection('emails').insertOne({email:userEmail});

        client.close();
        res.status(201).json({ message: 'Signed Up!' })
    }
}