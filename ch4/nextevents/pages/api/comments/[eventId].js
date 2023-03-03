function handler(req, res) {

    const eventId = req.query.eventId;

    if(req.method == "POST"){

        const {email,name,text} = req.body;

        if(!email.includes('@') || !name || name.trim === "" || !text || text.trim === "" ){
            res.status(422).json({ message: 'Invalid Input'});
            return;
        }
        
        const newComment = {
            id: new Date().toISOString(),
            email,
            name,
            text
        }

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