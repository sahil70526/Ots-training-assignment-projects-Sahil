import bodyParser from 'body-parser';
import express from 'express';
import router from './routes/userRoutes.js';

const app= express();
app.use(bodyParser.json());


app.use('/api/user',router);


app.listen(3000,()=>{
   console.log("Server started at port 3000");
})