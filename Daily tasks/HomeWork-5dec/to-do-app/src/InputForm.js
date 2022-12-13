import React, { useEffect, useState } from "react";
import { Button, Form } from "semantic-ui-react";

function InputForm({ parentBag,updateItem }) {
  const [input, setInput] = useState({foodName:null,chef:null,description:null});
  // const[itemUpdate,setItemUpdate]=useState(null);
  useEffect(()=>{
  setInput({foodName:updateItem[0].foodName})
  },[updateItem]);

  // useEffect(()=>{
  //  setInput({foodName:itemUpdate.foodName})
  // },[itemUpdate]);

  function addData(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  return (
    <div
      style={{
        marginTop: "10px",
        border: "0.5px solid #F3CCFF",
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
            onChange={addData}
          />
        </Form.Field>
        <Form.Field>
          <input
            className="search"
            name="chef"
            value={input.chef}
            type="text"
            placeholder="Enter Chefs name"
            onChange={addData}
          />
        </Form.Field>
        <Form.Field>
          <textarea
            placeholder="Enter description of your recipy"
            name="description"
            value={input.description}
            onChange={addData}
          />
        </Form.Field>
        <Button
          className="btn"
          onClick={() => {
            parentBag(input);
            setInput({foodName:'',chef:'',description:''})
          }}
        >
          Add
        </Button>
      </Form>
    </div>
  );
}

export default InputForm;
