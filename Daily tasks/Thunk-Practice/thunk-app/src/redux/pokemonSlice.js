import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState={
    data:{
        loading:false,
        pokemons:[]
    }
}

export const getPokemons= createAsyncThunk('pokemon/getPokemon',()=>{
    return axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then(res=>res.data.results)
            .catch(err=>err)
})


export const pokemonSlice= createSlice({
   name:'pokemon',
   initialState,
   extraReducers:(builder)=>
   {
   builder.addCase(getPokemons.pending,(state)=>{
     state.data.loading=true;
   })
   builder.addCase(getPokemons.fulfilled,(state,action)=>{
    state.data.loading=false;
    state.data.pokemons=action.payload;
  })
  builder.addCase(getPokemons.rejected,(state)=>{
    state.data.loading=false;
    state.data.pokemons=[];
  })
   } 
})
