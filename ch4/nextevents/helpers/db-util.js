import { MongoClient } from 'mongodb';

export async function connectDatabase(){
    const client = await MongoClient.connect('mongodb+srv://rajeevkumarmajhi:Gamerboy7@cluster0.4sbdhxa.mongodb.net/events?retryWrites=true&w=majority');
    return client;
}

export async function insertDocument(client,collection,document){
    let db = client.db();
    let result = await db.collection(collection).insertOne(document);
    return result;
}

export async function getAllDocument(client,collection,sort){
    let db = client.db();
    let documents = await db.collection('comments').find().sort(sort).toArray();
    return documents;
}

export async function getEventComments(client,collection,sort,eventId){
    let db = client.db();
    let documents = await db.collection('comments').find({"eventId":eventId}).sort(sort).toArray();
    return documents;
}