import React from 'react'
import { useDispatch } from 'react-redux'

import { getPokemons } from './redux/pokemonSlice'
import Pokemon from './Pokemon'

function App() {
  const dispatch=useDispatch();
  return (

      <div>
     <button onClick={()=>dispatch(getPokemons())}> Get Pokemons</button>
     <Pokemon/>
      </div>

  )
}

export default App