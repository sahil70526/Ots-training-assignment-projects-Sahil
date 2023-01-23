import express from 'express';
import { engine } from 'express-handlebars';
import mongoose from 'mongoose';
import Handlebars from 'handlebars';
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access';
import books from "./data/books.js";
const app = express();
app.use(express.json());


app.engine('handlebars', engine(

  {
    handlebars: allowInsecurePrototypeAccess(Handlebars)
  }
));
app.set('view engine', 'handlebars');
app.set('views', './views');

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
//   let data= await bookInfo.insertMany(books);
//   console.log(data);
// })

app.get('/', async(req, res) => {
  
    let data= await bookInfo.find();
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

app.get('/addbook',(req,res)=>{
  res.render('addUpdateForm')
});


app.get('/:id',async(req,res)=>{
  const {id}= req.params;
if(mongoose.Types.ObjectId.isValid(id)){
  let specificBook= await bookInfo.findById(id);
  res.render('specificBook',specificBook);
}
});


app.listen(3001,(req,res)=>{
    console.log("server started at port");
});