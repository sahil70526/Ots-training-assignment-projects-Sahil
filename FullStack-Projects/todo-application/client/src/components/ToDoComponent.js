import { Segment, Checkbox, Icon, Container } from "semantic-ui-react";

const ToDoComponent = ({ todos, updateTodo, deleteToDo }) => {
  return (
    <div className="container">
      <Container style={{ marginTop: "5rem" }}>
        {todos.map((todo) => (
          <Segment
            raised
            key={todo._id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span className={todo.completed ? "completed" : "not-completed"}>
              {todo.description}
            </span>{" "}
            <span>
              <Checkbox
                toggle
                checked={todo.completed}
                onClick={() => updateTodo(todo._id)}
              />
              <Icon name="archive" color="red" size="large" onClick={() => deleteToDo(todo._id)} style={{marginBottom:13,marginLeft:5}} />
            </span>

          </Segment>
        ))}
      </Container>
    </div>
  );
};

export default ToDoComponent;
