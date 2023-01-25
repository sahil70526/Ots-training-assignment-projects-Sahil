import express from 'express';
import jwt from 'jsonwebtoken';
const app= express();
app.use(express.json());

let SECRET_KEY= "Sahil Singh";

app.post('/login',(req,res)=>{
    const jwtToken= jwt.sign(req.body,SECRET_KEY);
    res.send(jwtToken);
    console.log(jwtToken);
});

app.get('/profile',(req,res)=>{
 console.log(req.headers);
 const userDetails= jwt.verify(req.headers.access_token,SECRET_KEY);
 res.send(userDetails);
 console.log(userDetails);
});

app.listen(3000,()=>{
    console.log("server started on port 3000");
})