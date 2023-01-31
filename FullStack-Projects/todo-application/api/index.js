import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import ToDo from "./models/Todo.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

const app = express();
app.use(express.json());
app.use(cors());

mongoose.set("strictQuery", false);
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `Database Connected & Server running at http://localhost:${PORT}/`
      );
    });
  })
  .catch((e) => {
    console.log("Error - ", e);
  });

/*

/GET -> Read All Todos

*/

app.get("/todos", async (req, res) => {
  const todosList = await ToDo.find();
  res.send(todosList);
});

/*

/POST -> Add New ToDo Item

*/

app.post("/todos/add", (req, res) => {
  const newTodo = new ToDo({
    description: req.body.description,
  });
  newTodo.save();
  res.json(newTodo);
});

/*

/PATCH -> Edit ToDo

*/

app.patch("/todos/edit/:id", async (req, res) => {
  const { id } = req.params;
  const selectedTodo = await ToDo.findById(id);
  selectedTodo.completed = !selectedTodo.completed;
  selectedTodo.save();
  res.send(selectedTodo);
});

app.delete("/todos/delete/:id",async(req,res)=>{
  const {id}=req.params;
  const data= await ToDo.deleteOne({_id:id});
  res.send(data);
})
