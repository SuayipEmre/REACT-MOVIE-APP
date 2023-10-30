import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const initialState = {
    similarMovies : [],
    similarMoviesStatus : {
        isLoading : false,
        isError : false
    }
}




export const _fetchSimilarMovies = createAsyncThunk('similar/fetchSimilarMovies', async(id) => {
    const res = await axios.get(`${import.meta.env.VITE_API_BASE_ENDPOINT}/movie/${id}/similar?language=tr&api_key=${import.meta.env.VITE_API_KEY }`)
    return res.data.results
  })

export const similarMovies = createSlice({
    name : 'similar movies',
    initialState,

    reducers : {},

    extraReducers : (builder) => {
        builder
        .addCase(_fetchSimilarMovies.fulfilled, (state,action) => {
          state.similarMovies = action.payload
          state.similarMoviesStatus = {
            isLoading : false,
            isError : false
          }
        })

        .addCase(_fetchSimilarMovies.rejected, (state,action) => {
          state.similarMoviesStatus = {
            isLoading : false,
            isError : true
          }
        })


        .addCase(_fetchSimilarMovies.pending, (state,action) => {
          state.similarMoviesStatus = {
            isLoading : true,
            isError : false
          }
        })
      }
})

export default similarMovies.reducer