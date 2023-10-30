import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movie: [],
  movieStatus: {
    isLoading: false,
    isError: false
  }
}


export const _fetchMovieDetailByID = createAsyncThunk('movieDetail/fetchMovieDetailByID', async (id) => {
  const res = await axios.get(`${import.meta.env.VITE_API_BASE_ENDPOINT}/movie/${id}?language=tr&api_key=${import.meta.env.VITE_API_KEY}`)
  return res.data
})

export const movieDetail = createSlice({
  name: 'movie detail',
  initialState,

  reducers: {},

  extraReducers: (builder) => {


    builder
      .addCase(_fetchMovieDetailByID.fulfilled, (state, action) => {
        state.movie = action.payload
        state.movieStatus = {
          isLoading: false,
          isError: false
        }
      })
      .addCase(_fetchMovieDetailByID.rejected, (state, action) => {
        state.movieStatus = {
          isLoading: false,
          isError: true
        }
      })

      .addCase(_fetchMovieDetailByID.pending, (state, action) => {
        state.movieStatus = {
          isLoading: true,
          isError: false
        }
      })

  }
})


export default movieDetail.reducer