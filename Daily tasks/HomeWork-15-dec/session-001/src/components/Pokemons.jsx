import React from 'react'
import { useFetch } from '../custom-hooks/api-hook'

const Pokemons = () => {
    const [isLoading, data] = useFetch('https://pokeapi.co/api/v2/pokemon/')
  return (
    <div>
        {
            isLoading ? 
            <div>... Loading</div> :
            <ul>
                {
                    data.map((pk, i)=><li key={i}>{pk.name}</li>)
                }
            </ul>
        }
    </div>
  )
}

export default Pokemons