import { configureStore } from '@reduxjs/toolkit';
import counterSlice from "./counter/counterSlice";
import userSlice from "./userData/userSlice"

//set up redux store by combining all your slices
const store = configureStore({
    reducer:{
        counter : counterSlice, //adding counterSlice to store
        user : userSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;