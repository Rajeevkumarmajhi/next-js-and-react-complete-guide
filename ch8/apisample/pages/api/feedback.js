import fs from "fs";
import path from "path";


export default function handler(req, res) {

  if(req.method === "POST"){
    const email = req.body.email;
    const feedBackText = req.body.text;
    const newFeedBack = {
      id:new Date().toISOString,
      email:email,
      text:feedBackText,
    };

    const filePath = path.join(process.cwd(),'data','feedback.json');
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    data.push(newFeedBack);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({message:"Success!",feedBack:newFeedBack});
  }else{
    res.status(200).json({ name: 'John Doe' })
  }
}
