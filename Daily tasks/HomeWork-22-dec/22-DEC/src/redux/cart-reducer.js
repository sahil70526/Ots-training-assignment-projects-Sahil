import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: { cartItem: {} },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //  Adding item into cart --------------------------

    addCart: (state, action) => {
      if (Object.keys(state.data.cartItem).length === 0) {
        state.data = {
          cartItem: { [action.payload.id]: { ...action.payload } },
        };
      } else if (state.data.cartItem.hasOwnProperty(action.payload.id)) {
        let count1 = state.data.cartItem[action.payload.id].count + 1;
        state.data = {
          cartItem: {
            ...state.data.cartItem,
            [action.payload.id]: {
              ...state.data.cartItem[action.payload.id],
              count: count1,
            },
          },
        };
      } else {
        state.data = {
          cartItem: {
            ...state.data.cartItem,
            [action.payload.id]: { ...action.payload },
          },
        };
      }
    },

    //  removing element into cart --------------------------

    removeFromCart: (state, action) => {
      if (state.data.cartItem[action.payload].id === action.payload) {
        let item = delete state.data.cartItem[action.payload];
        state.data = { cartItem: { ...state.data.cartItem, ...item } };
      }
    },

    //  removing all element into cart --------------------------

    removeAll: (state, action) => {
      if (action.payload) {
        let newItem = delete state.data.cartItem;
        state.data = { cartItem: newItem  };
      }
    },

    // inrement and decrement reducer

    increaseCartItemCount: (state, action) => {
      let count1 = state.data.cartItem[action.payload.id].count + 1;
      state.data = {
        cartItem: {
          ...state.data.cartItem,
          [action.payload.id]: {
            ...state.data.cartItem[action.payload.id],
            count: count1,
          },
        },
      };
    },

    decreaseCartItemCount: (state, action) => {
      if (state.data.cartItem[action.payload.id].count > 1) {
        state.data = {
          cartItem: {
            ...state.data.cartItem,
            [action.payload.id]: {
              ...state.data.cartItem[action.payload.id],
              count: state.data.cartItem[action.payload.id].count - 1,
            },
          },
        };
      }
    },
  },
});

export const {
  addCart,
  removeFromCart,
  increaseCartItemCount,
  decreaseCartItemCount,
  removeAll,
} = cartSlice.actions;

export default cartSlice;
