import { Segment, Checkbox, Icon } from "semantic-ui-react";

const ToDoComponent = (props) => {
  return (
    <Segment
      raised
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span className={props.completed ? "completed" : "not-completed"}>
        {props.description}
      </span>{" "}
      <span>
        <Checkbox toggle checked={props.completed} />
        {/* <Icon name="delete" /> */}
      </span>
    </Segment>
  );
};

export default ToDoComponent;
