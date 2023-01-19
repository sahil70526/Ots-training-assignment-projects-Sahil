import express from 'express';
import { engine } from 'express-handlebars';
import mongoose from 'mongoose'
import books from "./data/books.js";
const app = express();
app.use(express.json());

// db connection string -----------------------------------------

mongoose.connect("mongodb+srv://demo1234:demo1234@cluster0.s2lbzmy.mongodb.net/library?retryWrites=true&w=majority",
{ useNewUrlParser: true, useUnifiedTopology: true}).then(x => {
  console.log("Connection success..!!");
}).catch(err => {
  console.log(err);
});

// creating new books schema -----------------------------------------

const BookSchema= new mongoose.Schema(
    {
      title: {type: String, required: true},
      author:{type:String, required: true},
      discription:{type:String, required: true},
      img: {type: String},
    }
  );

//   creating a new bookInfo collection ------------------------------
const bookInfo= mongoose.model('books',BookSchema);


// app.post('/',async(req,res)=>{
//     let data= await bookInfo.insertMany(books);
//     res.send(data);
// })

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', async(req, res) => {
    let data= await bookInfo.find();
    console.log(data);
    if(data.length>0){
        res.render('home',{
            data:data
        });
    }

});

app.get('/membership', (req, res) => {
    res.render('membership');
});
app.get('/join', (req, res) => {
    res.render('join');
});


app.listen(3000,(req,res)=>{
    console.log("server started at port");
});