import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const initialState = {
    upComingMovies : [],
    upComingMoviesStatus : {
        isLoading : false,
        isError : false
    }
}




export const _fetchUpComingMovies = createAsyncThunk('upComing/fetchUpComingMovies', async() => {
    const res = await axios.get(`${import.meta.env.VITE_API_BASE_ENDPOINT}/movie/upcoming?language=tr&api_key=${import.meta.env.VITE_API_KEY }`)
    return res.data.results
  })


export const upComing = createSlice({
    name : 'up coming ',
    initialState,

    reducers : {},

    extraReducers : (builder) => {
        builder
        .addCase(_fetchUpComingMovies.fulfilled, (state,action) => {
          state.upComingMovies = action.payload
          state.upComingMoviesStatus = {
            isLoading : false,
            isError : false
          }
        })

        .addCase(_fetchUpComingMovies.rejected, (state,action) => {
          state.upComingMoviesStatus = {
            isLoading : false,
            isError : true
          }
        })


        .addCase(_fetchUpComingMovies.pending, (state,action) => {
          state.upComingMoviesStatus = {
            isLoading : true,
            isError : false
          }
        })
      }
})

export default upComing.reducer