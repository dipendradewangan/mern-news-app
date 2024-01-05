import { configureStore } from '@reduxjs/toolkit'
import topHeadlinesSlice from './topHeadlines/topHeadlinesSlice'
import everythingSlice from './everythings/everythingSlice'



export const store = configureStore({
    reducer: {
        topHeadlines : topHeadlinesSlice,
        everythings : everythingSlice
    }
})