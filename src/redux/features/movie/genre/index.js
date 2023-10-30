import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    genres: [],
    moviesByGenre : [],
    moviesStatus : {
      isLoading : false,
      isError : false,
    },
    genresStatus : {
      isLoading : false,
      isError : false,
    }
}

export const _fetchGenre = createAsyncThunk('genreTitle/fetchGenre', async() => {
  const genre = await axios.get(`${import.meta.env.VITE_API_BASE_ENDPOINT}/genre/movie/list?language=tr&api_key=${import.meta.env.VITE_API_KEY }`)
  return genre.data.genres
})

export const _fetchMoviesByGenre = createAsyncThunk('movies/moviesByGenre', async(id) => {
  const genre = await axios.get(`${import.meta.env.VITE_API_BASE_ENDPOINT}/genre/${id}/movies?language=tr&api_key=${import.meta.env.VITE_API_KEY }`)
  return genre.data.results
})

//https://api.themoviedb.org/3/genre/28/movies?language=tr
export const genre = createSlice({

    name :'movieByGenre',
    initialState,


    reducers : {

    },


    extraReducers : (builder) => {
      builder


      //genres
      .addCase(_fetchGenre.fulfilled, (state, action) => {
        state.genres = action.payload
        state.genresStatus = {
          isLoading : false,
          isError : false
        }
      
      })

      .addCase(_fetchGenre.pending, (state, action) => {
        state.genresStatus = {
          isLoading : true,
          isError : false
        }
      })


      .addCase(_fetchGenre.rejected, (state, action) => {
        state.genresStatus = {
          isLoading : false,
          isError : true,
        }
      })


      //Movies
      .addCase(_fetchMoviesByGenre.fulfilled, (state, action) => {
        state.moviesByGenre = action.payload
        state.moviesStatus = {
          isLoading:false,
          isError : false,
        }
      })

      .addCase(_fetchMoviesByGenre.pending, (state, action) => {
        state.moviesStatus = {
          isLoading:true,
          isError : false
        }
      })
      
      
      .addCase(_fetchMoviesByGenre.rejected, (state, action) => {
        state.moviesStatus = {
          isLoading:false,
          isError : true
        }
      })
    }
})


export default genre.reducer

