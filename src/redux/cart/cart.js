const { createSlice } = require("@reduxjs/toolkit");

const cartState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState: cartState,
    reducers: {
        addCartItem(state, action) {
            const cartItems = state;
            const index = cartItems.findIndex(element => element.id === action.payload.id);
            const cartItem = cartItems[index];
            if (cartItem) {
                cartItems[index] = { ...cartItem, count: cartItem.count + action.payload.count };
                return;
            };
            cartItems.push(action.payload);
        },
        deleteCartItem() {

        },
        plusCartItem(state, action) {
            const cartItems = state;
            const index = cartItems.findIndex(element => element.id === action.payload.id);
            const cartItem = cartItems[index];
            cartItem.count++;
            console.log(cartItem.count);

        },
        minusCartItem(state, action) {
            const cartItems = state;
            const index = cartItems.findIndex(element => element.id === action.payload.id);
            const cartItem = cartItems[index];
            cartItem.count--;
        },
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;