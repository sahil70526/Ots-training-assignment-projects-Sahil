import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// ----------- making connection------------------------------

try {
mongoose.connect(`${process.env.MONGO_URL}`,{ useNewUrlParser: true, useUnifiedTopology: true}).then(()=>console.log("connection successfull")); 
} catch (error) {
    console.log(error);
}

const BookSchema= new mongoose.Schema(
    {
      title: {type: String, required: true},
      author:{type:String, required: true},
      discription:{type:String, required: true},
      img: {type: String},
    }
  );

//   creating a new bookInfo collection ------------------------------


const bookInfo= mongoose.model('books',BookSchema,'test');

export default bookInfo;