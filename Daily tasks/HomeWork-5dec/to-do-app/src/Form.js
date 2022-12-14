import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import List from "./List";
import InputForm from "./InputForm";
import Description from "./Description";
function Form() {
  const [index,setIndex]=useState(null)
  const [data, setData] = useState([]);
  const [updateItem,setUpdateItem]=useState(null)
  const [des, setDes] = useState({});
  let update = (item) => {
    if (item.foodName && item.chef && item.description) {
      setData((c) => [...c, item]);
    }
  };
  let showDescription = (i) => {
    setDes(i);
  };

  let deleteData = (index) => {
    console.log(index);
    let newData = data.filter((currentItem) => {
      if (data[index]===currentItem) {
        return false;
      } else return true;
    });
    setData(newData);
  };

  let updateData=(index)=>{
    let newData1 = data.filter((currentItem) => {
      if (data[index]===currentItem) {
        return true;
      } else return false;
    });
    setUpdateItem(newData1[0]);
    setIndex(index);
  }
  let updateContent=(item,index)=>{
  let newData2=data.map((item1)=>{
    if(data[index]===item1){
    return {... item}
    }
    return item1
  })
  setData(newData2)
  }
  return (
    <div className="App-header">
      <Grid columns={2} padded="horizontally">
        <Grid.Column>
          <Grid.Row>
            <InputForm parentBag={update} updateItem={updateItem} parentBag1={updateContent} index={index}/>
          </Grid.Row>
          <Grid.Row>
            <List
              arr={data}
              details={showDescription}
              deleteIndex={deleteData}
              updateteIndex={updateData}
            />
          </Grid.Row>
        </Grid.Column>
        <Grid.Column>
          <Description arr1={des} />
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default Form;
