import { MongoClient } from 'mongodb';

// const url = 'mongodb+srv://rajeevkumarmajhi:Gamerboy7@cluster0.4sbdhxa.mongodb.net/?retryWrites=true&w=majority';
// const client = new MongoClient(url);
// const dbName = 'events';

async function connectDatabase(){
    const client = await MongoClient.connect('mongodb+srv://rajeevkumarmajhi:Gamerboy7@cluster0.4sbdhxa.mongodb.net/events?retryWrites=true&w=majority');
    return client;
}

async function insertDocument(client,document){
    let db = client.db();
    await db.collection('newsletters').insertOne(document);
}

async function handler(req, res) {
    if (req.method === "POST") {
        const userEmail = req.body.email;
        if (!userEmail || !userEmail.includes('@')) {
            res.status(422).json({ message: 'Invalid Email Address' });
            return;
        }

        let client;

        try{
            client = await connectDatabase();
        }catch(error){
            res.status(500).json({ message: "DB cannot be connected"});
            return;
        }

        try{
            await insertDocument(client,{email:userEmail});
            client.close();
        }catch(error){
            res.status(500).json({message:"Data cannot be inserted!"});
            return;
        }

        res.status(201).json({ message: 'Signed Up!' })
    }
}

export default handler;