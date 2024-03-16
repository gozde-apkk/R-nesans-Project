import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    userCount : 0
}


const countSlice = createSlice({
    name: "count",
    initialState,
    reducers: {
        increment: (state) => {
            state.userCount = state.userCount + 1
        },
        decrement: (state) => {
            state.userCount = state.userCount - 1
        },
        number : (state, action) => {
            state.userCount = action.payload;
        }
    }
})

export const {number, decrement, increment}  = countSlice.actions;
export default countSlice.reducer;