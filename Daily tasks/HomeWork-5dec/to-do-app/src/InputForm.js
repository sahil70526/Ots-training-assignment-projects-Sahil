import React, { useEffect, useState } from "react";
import { Button, Form } from "semantic-ui-react";

function InputForm({ parentBag,updateItem ,parentBag1,index}) {
  const [input, setInput] = useState({foodName:"",chef:"",description:""});
  const [toUpdate,setToupdate]=useState(false)
  useEffect(()=>{
   if(updateItem){
    let value=updateItem;
    setToupdate(true)
    setInput({...value})
   }
  },[updateItem]);

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
       {
        toUpdate? <Button
        className="btn"
        onClick={() => {
          parentBag1(input,index);
          setInput({foodName:'',chef:'',description:''})
          setToupdate(false)
        }}
      >
        update
      </Button>: <Button
          className="btn"
          onClick={() => {
            parentBag(input);
            setInput({foodName:'',chef:'',description:''})
          }}
        >
          Add
        </Button>
       }
      </Form>
    </div>
  );
}

export default InputForm;
