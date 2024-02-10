import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: ["apple", "banana"],
    reducers: {
        addItem(state, action){
            state.push(action.payload);
        },
        clearCart: (state) => { return state = []},
    }
});

export const {addItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;