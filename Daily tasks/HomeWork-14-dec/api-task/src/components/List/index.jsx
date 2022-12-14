import React from 'react'
import ListItem from './ListItem'

const List = ({pokemons}) => {
  return (
    <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
            { (pokemons && pokemons.length > 0) ?
                 pokemons.map((pokemon, index)=><ListItem key={index} pokemon={pokemon} />) 
                 : <div>No data found!!</div> }
    </div>
  )
}

export default List