import express from 'express';
import bodyParser from 'body-parser'
const app = express();
const router= express.Router();

const bodyParsers=bodyParser.urlencoded({extended:true});

router.get('/',bodyParsers,(req,res)=>{
    res.send('<h1>Hello Node</h1>')
});

router.get('/user',bodyParsers,(req,res)=>{
    res.send(`<h1>Welcome to user page</h1>
    `)
});

app.use(router)
app.listen(4000,(req,res)=>{
    console.log('server started at port 4000');
})