import React from 'react'
import ListItem from './ListItem'

const List = ({pokemons,heightValue}) => {
  // let heightValue=()=>{
    
  // }
  return (
    <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
            { (pokemons && pokemons.length > 0) ?
                 pokemons.map((pokemon, index)=><ListItem key={index} pokemon={pokemon} heightValue={heightValue}/>) 
                 : <div>No data found!!</div> }
    </div>
  )
}

export default List