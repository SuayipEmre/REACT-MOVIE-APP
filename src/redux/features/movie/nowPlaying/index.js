import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const initialState = {
    nowPlayingMovies : [],
    nowPlayingMoviesStatus : {
        isLoading : false,
        isError : false
    }
}




export const _FetchNowPlayingMovies = createAsyncThunk('nowPlaying/FetchNowPlayingMovies', async() => {
    const res = await axios.get(`${import.meta.env.VITE_API_BASE_ENDPOINT}/movie/now_playing?language=tr&api_key=${import.meta.env.VITE_API_KEY }`)
    return res.data.results
  })


export const nowPlaying = createSlice({
    name : 'now playing',
    initialState,

    reducers : {},

    extraReducers : (builder) => {
        builder
        .addCase(_FetchNowPlayingMovies.fulfilled, (state,action) => {
          state.nowPlayingMovies = action.payload
          state.nowPlayingMoviesStatus = {
            isLoading : false,
            isError : false
          }
        })

        .addCase(_FetchNowPlayingMovies.rejected, (state,action) => {
          state.nowPlayingMoviesStatus = {
            isLoading : false,
            isError : true
          }
        })


        .addCase(_FetchNowPlayingMovies.pending, (state,action) => {
          state.nowPlayingMoviesStatus = {
            isLoading : true,
            isError : false
          }
        })
      }
})

export default nowPlaying.reducer