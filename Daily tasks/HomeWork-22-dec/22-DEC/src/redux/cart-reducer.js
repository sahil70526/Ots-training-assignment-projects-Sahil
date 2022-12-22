import { createSlice } from "@reduxjs/toolkit";

const initialState = {data: {cartItem:{item:{id:null,name:'',price:''},count:0}}}

// cartItem: {
//    1:{item: {id: 1, name:'Smart Tv', price:'200$'}, count:5}
//    2:{item: {id: 2, name:'Smart Tv', price:'200$'}, count:2}
//    3:{item: {id: 3, name:'Smart Tv', price:'200$'}, count:1}
//}

// {id: 1, name:'Smart Tv', price:'200$'}

// action.payload = {id: 1, name:'Smart Tv', price:'200$'}
// action.payload.id = 1
// if 1 is present in cartItem as a key them increase count
// else create a key 1 and assign action.payload as a value to id

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{

        addCart: (state, action) => {
             state.data = {cartItem: [...state.data.cartItem, action.payload] }
        },
        removeFromCart: (state, action) => {
            const newArray = state.data.cartItem.filter((item, index)=>index!==action.payload)
            state.data = {cartItem: newArray}
        },
        removeAll:()=>{}
       // inrement and decrement reducer
    }
})

export const {addCart, removeFromCart} = cartSlice.actions

export default cartSlice