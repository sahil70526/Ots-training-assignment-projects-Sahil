import { createSlice } from "@reduxjs/toolkit"

const initialState = {data: {username:null}}

export const userDepartment = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action)=>{
            state.data = action.payload
        },
        logout: (state) => {
            state.data = initialState.data
        }
    }

})


export const {login, logout} = userDepartment.actions

// const login = (data) => {
//     return {type:'users/login', payload: data}
// }