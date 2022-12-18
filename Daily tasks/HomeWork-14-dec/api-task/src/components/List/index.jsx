import React from 'react'
import ListItem from './ListItem'

const List = ({pokemons,calHeight}) => {
  let heightValue=(item)=>{
    console.log(item);
  }
  return (
    <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
            { (pokemons && pokemons.length > 0) ?
                 pokemons.map((pokemon, index)=><ListItem key={index} pokemon={pokemon} data1={heightValue}/>) 
                 : <div>No data found!!</div> }
    </div>
  )
}

export default List