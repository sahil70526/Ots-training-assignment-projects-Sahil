import express from 'express';
import dotenv from 'dotenv';
import router from './routes/bookRoutes.js';

const app= express();
app.use(express.json());
dotenv.config();

app.use('/api/books',router);




app.listen(process.env.PORT,()=>{
    console.log(`server started on  port ${process.env.PORT}`);
});
