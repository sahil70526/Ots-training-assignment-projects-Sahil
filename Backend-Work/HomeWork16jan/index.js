import express  from "express";
import path from 'path'
import { fileURLToPath } from "url";

const app= express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.get('/',(req,res)=>{
    res.status(200).sendFile(path.join(`${__dirname}`, "./Templates/main.html"));
});

app.listen(3000,()=>{
console.log('server started on port 3000');
})