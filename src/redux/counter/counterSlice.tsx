import { createSlice } from '@reduxjs/toolkit';

//initialState for the counter
const initialState = {
    value: 0
}

//create a slice with a name, initial state and reducers
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment:(state) => {
            state.value = state.value + 1
        },
        decrement: (state) => {
            state.value = state.value - 1
        },
        incrementByAmount:(state, action)=>{
            state.value = state.value + action.payload
        }
    }
})


export const {increment, decrement, incrementByAmount} = counterSlice?.actions;

export default counterSlice.reducer;