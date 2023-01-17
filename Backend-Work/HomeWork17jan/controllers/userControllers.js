import { v4 as uuidv4 } from "uuid";
import user from "../data.js";

let newData = user;

// ------------- get all users by get method----------------
const getAllUsers = (req, res) => {
  res.send(newData);
};

// ------------ inserting data with post method --------------------

const createUser = (req, res) => {
  let newUser = { id: uuidv4(), ...req.body };
  newData = [...newData, newUser];
  res.send(`user created with ${req.body.name}`);
};

// ----------- updating data with put method --------------------

const updateUserData = (req, res) => {
  let { id } = req.params;

  let index2 = 0;
  let index = newData.map((c, i) => {
    if (c.id === id) {
      index2 += i;
      return i;
    }
  });

  let updatedUser = { id: id, ...req.body };
  newData.splice(index2, 1, updatedUser);
  res.send(`user at ${id} is updated.`);
};

// ----------- updating data with patch method --------------------

const updateUserByPatch = (req, res) => {
  let { id } = req.params;

  let index2 = 0;
  let index = newData.filter((c, i) => {
    if (c.id === id) {
      index2 += i;
      return true;
    } else {
      return false;
    }
  });

  let updatedUser = { ...index[0], ...req.body };
  newData.splice(index2, 1, updatedUser);
  res.send(`user at ${id} is updated by patch.`);
};

// ------------------ deleting user by delete method -------------------

const deleteData = (req, res) => {
  let { id } = req.params;
  let index2 = 0;
  let index = newData.map((c, i) => {
    if (c.id === id) {
      index2 += i;
      return i;
    }
  });

  newData.splice(index2, 1);
  res.send(`user deletd`);
};

export {
  getAllUsers,
  createUser,
  updateUserData,
  updateUserByPatch,
  deleteData,
};
