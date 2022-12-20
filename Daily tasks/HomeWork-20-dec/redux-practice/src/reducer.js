import {createSlice} from '@reduxjs/toolkit'

export const defaultSlice= createSlice({
    name:'counter',
    initialState:{
        value:0
    },
    reducers:{
        increment:(state)=>{
         state.value += 1;
        },
        amount:(state,action)=>{
            state.value +=action.payload;
        }
    }

})
 
export const {increment,amount}=defaultSlice.actions;
export default defaultSlice.reducer

