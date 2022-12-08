import React from 'react'

function Description({ arr1 }) {
    return (
        <div style={{margin:'10px',textAlign:'center'}}>
            <h2>The description of the food....</h2>
        <div>{arr1.foodName}</div>
        <div>{arr1.chief}</div>
        <div>{arr1.description}</div>
        </div>
    )
}

export default Description