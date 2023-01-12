const mongoose= require('mongoose')
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1/demo')

const StudentSchema= new mongoose.Schema({
    name: String,
    email:String,
    roll:Number,
});

const student= mongoose.model("Student",StudentSchema);

const db= async()=>{
    let data= new student({
        name:"Sahil Singh",
        email:"sahil@.com",
        roll:185552
    });
    const result = await data.save();
    console.log(result);
}

// db();

const dbRead= async()=>{
let data= await student.find();
console.log(data);
}

dbRead()