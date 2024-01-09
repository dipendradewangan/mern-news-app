import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchEverything } from "./everythingsAPI";


export const fetchEverythingsAsync = createAsyncThunk(
    'news/everythings',
    async ({searchString, page}) => {
        const response = await fetchEverything(searchString, page);
        return response.data;
    }
)


const initialState = {
    status: 'idle',
    newsData: [],
    totalNews : 0
}


export const EverythingSlice = createSlice({
    name: 'everything',
    initialState,
    reducer: {},
    extraReducers: (builder) => {
        builder.addCase(fetchEverythingsAsync.pending, (state) => {
            state.status = 'loading'
        })

        builder.addCase(fetchEverythingsAsync.fulfilled, (state, action) => {
            state.status = "idle"
            state.newsData = action.payload.articles
            state.totalNews = action.payload.totalResults
        })
    }
})


export const selectEverythingNews = (state)=>state.everythings.newsData
export const selectTotalEverytingNews = (state)=>state.everythings.totalNews


export default EverythingSlice.reducer;