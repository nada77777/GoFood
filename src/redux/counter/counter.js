const { createSlice } = require("@reduxjs/toolkit");

const counterState = { counter: 1 };

const counterSlice = createSlice({
    name: 'counter',
    initialState: counterState,
    reducers: {
        resetCounter(state) {
            console.log(state);
            state.counter = 1;
        },
        plusCounter(state) {
            state.counter++;

        },
        minusCounter(state) {
            state.counter--;

        },
    }
});

export const countertActions = counterSlice.actions;
export default counterSlice.reducer;