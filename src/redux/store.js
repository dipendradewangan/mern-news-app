import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './home/counterSlice'
import allNewsSlice from './home/allNewsSlice'



export const store = configureStore({
    reducer: {
        counter: counterSlice,
        allNews : allNewsSlice
    }
})