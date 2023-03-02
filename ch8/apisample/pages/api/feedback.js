import fs from "fs";
import path from "path";

function buildFeedbackPath(){
  return path.join(process.cwd(),'data','feedback.json');
}

function extractFeedback(filePath){
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}


export default function handler(req, res) {

  if(req.method === "POST"){
    const email = req.body.email;
    const feedBackText = req.body.text;
    const newFeedBack = {
      id:new Date().toISOString,
      email:email,
      text:feedBackText,
    };

    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    data.push(newFeedBack);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({message:"Success!",feedBack:newFeedBack});
  }else{
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    res.status(200).json({ feedBack: data })
  }
}
