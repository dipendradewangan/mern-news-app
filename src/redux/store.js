import { configureStore } from '@reduxjs/toolkit'
import topHeadlinesSlice from './topHeadlines/topHeadlinesSlice'



export const store = configureStore({
    reducer: {
        topHeadlines : topHeadlinesSlice
    }
})