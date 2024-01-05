import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchEverything } from "./everythingsAPI";


export const fetchEverythingsAsync = createAsyncThunk(
    'news/everythings',
    async () => {
        const response = await fetchEverything();
        return response.data;
    }
)


const initialState = {
    status: 'idle',
    newsData: []
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
            state.newsData = action.payload
        })
    }
})


export const selectEverythingNews = (state)=>state


export default EverythingSlice.reducer;