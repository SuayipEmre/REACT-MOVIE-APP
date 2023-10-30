import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const initialState = {
    topRatedMovies : [],
    topRatedMoviesStatus : {
        isLoading : false,
        isError : false
    }
}




export const _fetchTopRatedMovies = createAsyncThunk('topRated/fetchTopRatedMovies', async() => {
    const res = await axios.get(`${import.meta.env.VITE_API_BASE_ENDPOINT}/movie/top_rated?language=tr&api_key=${import.meta.env.VITE_API_KEY }`)
    return res.data.results
  })


export const topRated = createSlice({
    name : 'top rated',
    initialState,

    reducers : {},

    extraReducers : (builder) => {
        builder
        .addCase(_fetchTopRatedMovies.fulfilled, (state,action) => {
          state.topRatedMovies = action.payload
          state.topRatedMoviesStatus = {
            isLoading : false,
            isError : false
          }
        })

        .addCase(_fetchTopRatedMovies.rejected, (state,action) => {
            console.log(action.error.message);
          state.topRatedMoviesStatus = {
            isLoading : false,
            isError : true
          }
        })


        .addCase(_fetchTopRatedMovies.pending, (state,action) => {
          state.topRatedMoviesStatus = {
            isLoading : true,
            isError : false
          }
        })
      }
})

export default topRated.reducer