import { configureStore, createSlice } from "@reduxjs/toolkit";

// configureStore: helps to create store => returns store object
// createSlice: helps to create reducers

const initialState = {data: {username:null}}

const userDepartment = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action)=>{
            //console.log('action',action)
            state.data = action.payload
        },
        logout: (state) => {
            state.data = initialState.data
        }
    }

})


export const {login, logout} = userDepartment.actions

export const store = configureStore({
    reducer:{
        user: userDepartment.reducer
    }
})