import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    require:true
  },
  createdAt: {
    type: String,
    default: Date.now(),
  },
});

export default mongoose.model("ToDo", TodoSchema);
