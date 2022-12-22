import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-reducer";

export const store = configureStore({
    reducer:{
        cart: cartSlice.reducer
    }
})