import { v4 as uuidv4 } from 'uuid';
import user from '../data.js';

let newData = user;


const getAllUsers = (req, res) => {
    res.send(newData);
};

const createUser = (req, res) => {
    let newUser = { id: uuidv4(), ...req.body };
    newData = [...newData, newUser];
    res.send(`user created with ${req.body.name}`)
}

const updateUserData = (req, res) => {
    let { id } = req.params;

let index2=0;
    let index = newData.map((c, i) => {
        if (c.id === id) {
            index2+=i;
            return i
        }
    });

    let updatedUser= {id:id,...req.body }
     newData.splice(index2,1,updatedUser);
     res.send(`user at ${id} is updated.`)


};

const deleteData= (req,res)=>{
    let { id } = req.params;
    let index2=0;
    let index = newData.map((c, i) => {
        if (c.id === id) {
            index2+=i;
            return i
        }
    });

    newData.splice(index2,1);
    res.send(`user deletd`)

}


export { getAllUsers, createUser, updateUserData,deleteData };