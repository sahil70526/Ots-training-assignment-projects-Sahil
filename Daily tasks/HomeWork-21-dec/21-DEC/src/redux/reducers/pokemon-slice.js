import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {data: {loading: false, pokemons:[], error:''}}

export const fetchPokemon = createAsyncThunk('pokemon/fetchPokemon', ()=>{ // helps to create async action creator outside slice
    return axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then(res=>res.data.results)
            .catch(err=>err)
})

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    extraReducers: (builder) =>{
        builder.addCase(fetchPokemon.pending, (state)=>{
            //pokemon/fetchPokemon/pending
            state.data.loading = true
        })
        builder.addCase(fetchPokemon.fulfilled, (state, action)=>{
            //pokemon/fetchPokemon/fulfilled
            state.data.loading = false
            state.data.pokemons = action.payload
            state.error = ''
        })
        builder.addCase(fetchPokemon.rejected, (state, action)=>{
            //pokemon/fetchPokemon/rejected
            state.data.loading = false
            state.data.pokemons = []
            state.error = action.error.message
        })
    }
})
