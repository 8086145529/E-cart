import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./slice/wishlistSlice";

const store = configureStore({
    reducer:{
        wishlistReducer:wishlistSlice 
    }
})

export default store