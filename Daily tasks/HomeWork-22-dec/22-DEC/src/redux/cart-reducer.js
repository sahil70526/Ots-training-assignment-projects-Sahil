import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: {} };

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
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      if (Object.keys(state.data).length === 0) {
        state.data = { cartItem: { [action.payload.id]: { item: { ...action.payload }, count: 0 } } }
      } else if (Object.keys(state.data).length>0&&state.data.cartItem.hasOwnProperty(action.payload.id)) {
        // let id1 = action.payload.id
        // let count = state.data.cartItem.id1.count;
        state.data = { cartItem: { [action.payload.id]: { item: { ...state.data.cartItem.item }, count:0 } } }
      } else {
        state.data.cartItem = { [action.payload.id]: { item: { ...action.payload }, count: 0 } }
        state.data = { ...state.data.cartItem }
      }
    },
    removeFromCart: (state, action) => {
      // if (state.data.cartItem.id === action.payload) {
      //   state.data = { cartItem: { id: null, name: "", price: "" } };
      // }
    },
    removeAll: () => { },
    // inrement and decrement reducer
  },
});

export const { addCart, removeFromCart } = cartSlice.actions;

export default cartSlice;
