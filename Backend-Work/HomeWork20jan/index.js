import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

const client = new MongoClient(`${process.env.DB_URI}`);
const dbConnect = async () => {
    try {
        const data = await client.connect();
        if (data) {
            console.log('connection successfull');
        }
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

dbConnect();


//  performing crud operations-------------------------------

// data insertion in mongo atlas ----------------------------
const info = [
    {
        name: 'Shikha Singh',
        description: "Working on biochemical evolution."
    },
    {
        name: 'Amit Soni',
        description: "Working as System Engineer at Infosys."
    },
    {
        name: 'Vishal Maurya',
        description: "Working as a software developer engineer at taptalent."
    },
]
const dbInsert = async () => {
    const db = await client.db('sample_db');
    const collection = await db.collection('crud');
    // for inserting single data-----------------------------
    // const data = await collection.insertOne({name:"Sahil Singh",description:"Learning j.s"});

    // for inserting multiple data -------------------------------------

    const data = await collection.insertMany(info);

    console.log(data);
}
// dbInsert();



// update data from mongodb -------------
const dbUpdate=async()=>{
    const db1 = await client.db('sample_db');
    const collection1 = await db1.collection('crud');
    const result= await collection1.updateOne({name:"Amit Soni"},{$set:{
        name:"Amit Kumaar Soni"
    }});
    console.log(result);


}

dbUpdate();




// delete data from mongodb -----------------------








// read data from the database ------------------------

const dbFind = async () => {
    const db1 = await client.db('sample_db');
    const collection1 = await db1.collection('crud');
    const data1=  await collection1.find().toArray();
    console.log(data1);
}

dbFind();










app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
})