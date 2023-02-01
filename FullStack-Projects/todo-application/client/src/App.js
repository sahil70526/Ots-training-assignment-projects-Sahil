import React, { useEffect, useState } from "react";
import axios from "axios";
import ToDoComponent from "./components/ToDoComponent";
import { Header, Checkbox, Icon, Modal, Button, Input } from "semantic-ui-react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [info, setInfo] = useState({ description: "", completed:false });


  const [open, setOpen] = React.useState(false)

  useEffect(() => {
    getAllTodos();
  }, []);

  const getAllTodos = async () => {
    const response = await axios.get("http://localhost:3001/todos");
    setTodos(response.data);
  };

  const updateTodo = async (todoId) => {
    const response = await axios.patch(
      "http://localhost:3001/todos/edit/" + todoId
    );
    if (response.status === 200) {
      const updatedTodos = todos.map((todo) => {
        if (todo._id === todoId) {
          todo.completed = response.data.completed;
        }
        return todo;
      });
      setTodos(updatedTodos);
    }
  };

  const deleteToDo = async (id) => {
    const response = await axios.delete(
      "http://localhost:3001/todos/delete/" + id
    );
    if (response.data.deletedCount === 1) {
      const newToDo = todos.filter((todo) => {
        if (todo._id === id) {
          return false;
        }
        return true;
      });
      setTodos(newToDo);
    }
  }

  const Addfn = (e) => {
    setInfo({...info, description: e.target.value })
  }



  const AddNewToDo = async () => {
    if (info.description) {
      const response = await axios.post(
        "http://localhost:3001/todos/add/", info
      );

      if (response.status === 200) {
        setTodos([...todos, response.data])
      }

    }
    setInfo({ description: "", completed: false })
    setOpen(false)
  }


  return (
    <div className="container">
      <Modal
        closeIcon
        open={open}
        trigger={<Button primary style={{ marginTop: "5%", marginLeft: "45%" }}>Add New To Do</Button>}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        size="tiny"
      >
        <Header content='Add New To Do' />
        <Modal.Content>
          <Input placeholder=' Add To Do...' name="description" value={info.description} onChange={Addfn} />
          <span style={{ marginLeft: "20%" ,fontSize:"large" }}>
            <Checkbox toggle onClick={() => setInfo({...info,completed:!info.completed})} style={{marginTop:15}} />
            Toggle If Completed </span>
        </Modal.Content>
        <Modal.Actions>
          <Button color='red' onClick={() => setOpen(false)}>
            <Icon name='remove' /> No
          </Button>
          <Button color='green' onClick={AddNewToDo}>
            <Icon name='checkmark' /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
      <ToDoComponent todos={todos} updateTodo={updateTodo} deleteToDo={deleteToDo} />
    </div>
  );
}

export default App;
