import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchAllNews } from './allNewsApi'

export const fetchAllNewsAsync = createAsyncThunk(
    'news/fetchAllNews',
    async (country) => {
        const response = await fetchAllNews(country);
        return response.data;
    }
)


export const fetchTopHeadling = createAsyncThunk(
    'news/topHeadlineNews',
    async (country)=>{
        const response = await fetchTopHeadline(country);
    }
)

const initialState = {
    status: 'idle',
    newsData: [],
    totalNews : 0
}

const allNewsSlice = createSlice({
    name: 'allNews',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllNewsAsync.pending, (state)=>{
            state.status = 'loading'
        })

        builder.addCase(fetchAllNewsAsync.fulfilled, (state, action)=>{
            state.status = 'idle'
            state.newsData = action.payload
            state.totalNews = action.payload.length
        } )
    }
})

export const selectAllNews = (state)=>state.allNews.newsData
export const selectTotalAllNews = (state)=>state.allNews.totalNews
export default allNewsSlice.reducer