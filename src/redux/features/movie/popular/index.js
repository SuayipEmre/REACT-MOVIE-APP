import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    movies : [],
    moviesStatus : {
      isLoading : false,
      isError : false
    }
}
export const _fetchPopularMovies = createAsyncThunk('popular/fetchPopularMovies', async() => {
  const res = await axios.get(`${import.meta.env.VITE_API_BASE_ENDPOINT}/movie/popular?language=tr-TR&api_key=${import.meta.env.VITE_API_KEY }`)
  return res.data.results
})
export const popularMovies = createSlice({
    name : 'popular Movies',
    initialState,
    reducers : {

    },


    extraReducers : (builder) => {
      builder
      .addCase(_fetchPopularMovies.fulfilled, (state,action) => {
        state.movies = action.payload
        state.moviesStatus = {
          isLoading : false,
          isError : false
        }
      })

      .addCase(_fetchPopularMovies.pending, (state,action) => {
        state.moviesStatus = {
          isLoading : true,
          isError : false
        }
      })

      .addCase(_fetchPopularMovies.rejected, (state,action) => {
        state.moviesStatus = {
          isLoading : false,
          isError : true
        }
      })
    }
})

export default popularMovies.reducer