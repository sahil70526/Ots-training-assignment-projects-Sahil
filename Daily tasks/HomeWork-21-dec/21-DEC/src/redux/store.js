import { configureStore } from "@reduxjs/toolkit";
import { userDepartment } from "./reducers/user-slice";
import { pokemonSlice } from "./reducers/pokemon-slice";

// configureStore: helps to create store => returns store object
// createSlice: helps to create reducers

export const store = configureStore({
    reducer:{
        user: userDepartment.reducer,
        pokemon: pokemonSlice.reducer
    }
})