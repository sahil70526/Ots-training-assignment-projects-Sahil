import React from 'react'
import { useSelector } from 'react-redux'

function Pokemon() {
    const data = useSelector((state) => state.pokemon.data);
    const { loading, pokemons } = data;
    console.log(loading);
    console.log(pokemons);
    return (
        <div>
            <ul >
                {pokemons.length > 0 && pokemons.map((c) => <li style={{ listStyle: 'none', marginLeft: '50%' }}>{c.name}</li>
                )}
            </ul>
        </div>
    )
}

export default Pokemon