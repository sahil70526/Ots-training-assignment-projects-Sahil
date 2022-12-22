import React from 'react'
import { useSelector } from 'react-redux'

const Pokemons = () => {
    const data = useSelector((state)=>state.pokemon.data)
    const {loading, pokemons} = data

  return (
    <div>
        <h1>Pokemons</h1>
        {
            loading ? <div>.....Loading</div> : (
                (pokemons && pokemons.length>0 ) ? <ul style={{listStyle:'none'}}>
                    {pokemons.map(pokemon=><li key={pokemon.name}>{pokemon.name.toUpperCase()}</li>)}
                </ul> : 
                <div> No data Found</div>
            )
        }
    </div>
  )
}

export default Pokemons