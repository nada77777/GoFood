import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart/cart';
import counterReducer from './counter/counter';
const store = configureStore({
    reducer: {
        cart: cartReducer,
        counter: counterReducer
    }
});

export default store;