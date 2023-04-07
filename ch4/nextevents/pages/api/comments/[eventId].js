import { connectDatabase, getEventComments, insertDocument } from '@/helpers/db-util';

// const url = 'mongodb+srv://rajeevkumarmajhi:Gamerboy7@cluster0.4sbdhxa.mongodb.net/?retryWrites=true&w=majority';
// const client = new MongoClient(url);
// const dbName = 'events';

async function handler(req, res) {

    const eventId = req.query.eventId;
    let client;
    try{
        client = await connectDatabase();
    }catch(error){
        res.status(500).json('DB cannot be connected');
        return;
    }
    
    if(req.method == "POST"){

        const {email,name,text} = req.body;

        if(!email.includes('@') || !name || name.trim === "" || !text || text.trim === "" ){
            res.status(422).json({ message: 'Invalid Input'});
            client.close();
            return;
        }
        
        const newComment = {
            email,
            name,
            text,
            eventId
        }
        let result;
        try{
            result = await insertDocument(client,'comments',newComment);
            newComment._id = result.insertedId;
            res.status(201).json({message:"Comment saved successfully",comment: newComment});
        }catch(error){
            res.status(500).json({message:"Comment insert failed"});
        }        
    }

    if(req.method == "GET"){

        try{
            let documents = await getEventComments(client,'comments',{ _id: -1 },eventId);
            res.status(200).json({ comments: documents });
        }catch(error){
            res.status(500).json({message:"Data fetching failed!"});
        }        
        
    }
    client.close();
}

export default handler;