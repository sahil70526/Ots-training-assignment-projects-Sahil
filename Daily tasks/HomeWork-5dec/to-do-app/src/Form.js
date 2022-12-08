import React, { useState } from 'react'
import { Grid, Image } from 'semantic-ui-react'
import List from './List';
// import './App.css';
import InputForm from './InputForm';
import Description from './Description';
function Form() {

    const [data, setData] = useState([]);
    const [des, setDes] = useState({});
    let update = (item) => {

        if (item) {
            setData((c) => [...c, item]);

        }


    }
    let showDescription = (i) => {
        setDes(i)
    }


    return (



        <div className='App-header'>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <InputForm parentBag={update} />
                    <List arr={data} details={showDescription} />
                </Grid.Column>
                <Grid.Column>
                    <Description arr1={des} />
                </Grid.Column>
            </Grid>

        </div>

    )
}

export default Form

// we can send data from form to list because form is the parent of list.
// Problem:- Form needs data from input form component (Which means we need to pass data from child to parent).


{/* <div>
<p>The following grid has horizontal gutters.</p>

<Grid columns={2} padded='horizontally'>
  <Grid.Column>
    <Image src='/images/wireframe/paragraph.png' />
  </Grid.Column>
  <Grid.Column>
    <Image src='/images/wireframe/paragraph.png' />
  </Grid.Column>
</Grid>
</div> */}