import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { v4 as uuid } from 'uuid';

function InputForm({ parentBag,updateContent}) {
  console.log(updateContent.foodName);
  const [input, setInput] = useState({ foodName: "", chef: "", description: "", id: null });
  const unique_id = uuid();
  function change(e) {
    setInput({ ...input, [e.target.name]: e.target.value })
  }
  return (
    <div
      style={{
        marginTop: "10px",
        border: "0.5px solid #F2E5E5",
        borderRadius: "10px",
        fontSize: "larger",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <Form>
        <Form.Field>
          <input
            className="search"
            type="text"
            value={input.foodName}
            name="foodName"
            placeholder="Enter Food name"
            onChange={change}
          />
        </Form.Field>
        <Form.Field>
          <input
            className="search"
            type="text"
            value={input.chef}
            name="chef"
            placeholder="Enter Chefs name"
            onChange={change}
          />
        </Form.Field>
        <Form.Field>
          <textarea name="description"
            value={input.description}
            placeholder='Enter description of your recipy'
            onChange={change} />
        </Form.Field>
        <Button
              className="btn"
              onClick={() =>
                 {setInput(input.id=unique_id)
                  parentBag(input);
                  setInput({foodName:"",chef:"",description:"",id:''})
              }}
            >
              Add
            </Button>
            <Button
              className="btn"
              onClick={() =>
                 { setInput({})
                  parentBag(input);
                 
              }}
            >
              update
            </Button>
      </Form>
    </div>
  );
}

export default InputForm;
