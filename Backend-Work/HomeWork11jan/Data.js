const mongoose = require('mongoose')
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1/demo')

const StudentSchema = new mongoose.Schema({
    name: String,
    email: String,
    roll: Number,
});

const student = mongoose.model("Student", StudentSchema);

// const db= async()=>{
//     let data= new student({
//         name:"Sahil Singh",
//         email:"sahil@.com",
//         roll:185552
//     });
//     const result = await data.save();
//     // console.log(result);
//     return result;
// }

// db();

const dbRead = async () => {
    let data = await student.find();
    let data1 = new student({
        name: "Sahil Singh",
        email: "sahil123@gmail.com",
        roll: 185552
    });
    let newData = data.filter((c) => {
        if (c.email === data1.email) {
            return true;
        } else {
            return false;
        }
    })  
    if (newData.length === 0) {
        await data1.save();
    }

    await student.deleteOne({name:"Sahil Singh"})
    console.log(data.length);

    // ---------- deleting duplicate data ------------





}

dbRead()