import React, { useState } from 'react'
import { Grid } from 'semantic-ui-react'
import List from './List';
import InputForm from './InputForm';
import Description from './Description';
function Form() {

    const [data, setData] = useState([]);
    const [des, setDes] = useState({});
    const [update, setUpdate] = useState(null);
    // const [index, setIndex] = useState(null);

    let setUpdateData = (item) => {
        if (item.chef && item.description
            && item.foodName && item.id
        ) {
            setData((c) => [...c, item]);
        }
    }
    let showDescription = (i) => {
        setDes(i)
    }
    console.log(data);
    let checkDelete = (i) => {
        let newData = data.filter((c) => {
            if (c.id === i) {
                return false;
            } else return true;
        })
        setData(newData)
    }
    function upadteData(item,index,clicked) {
        if (clicked) {
         let newData=  data.filter((c)=>{
          if(data[index].id===item.id){
            return true;
          }
           });
           setUpdate(newData)
        }
    }
    return (
        <div className='App-header'>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <Grid.Row>
                        <InputForm parentBag={setUpdateData} updateContent={update} />
                    </Grid.Row>
                    <Grid.Row>
                        <List arr={data} details={showDescription} deleteData={checkDelete} CheckUpdate={upadteData} />
                    </Grid.Row>

                </Grid.Column>
                <Grid.Column>
                    <Description arr1={des} />
                </Grid.Column>
            </Grid>

        </div>
    )
}

export default Form
