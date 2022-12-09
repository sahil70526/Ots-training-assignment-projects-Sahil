import React, { useState } from 'react'
import { Grid, Image } from 'semantic-ui-react'
import List from './List';
import InputForm from './InputForm';
import Description from './Description';
function Form() {

    const [data, setData] = useState([]);

    const [des, setDes] = useState({});
    let update = (item) => {
        if (item.chef && item.description
            && item.foodName
        ) {
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
                    <Grid.Row>
                        <InputForm parentBag={update} />
                    </Grid.Row>
                    <Grid.Row>
                        <List arr={data} details={showDescription} />
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
