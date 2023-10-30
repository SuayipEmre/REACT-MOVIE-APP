import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    movies : []
}
export const _fetchPopularMovies = createAsyncThunk('popular/fetchPopularMovies', async() => {
  const res = await axios.get(`${import.meta.env.VITE_API_BASE_ENDPOINT}/movie/popular?language=tr&api_key=${import.meta.env.VITE_API_KEY }`)
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
      })
    }
})

export default popularMovies.reducer