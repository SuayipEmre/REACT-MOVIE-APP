import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    likedMovies : [],
    moviesStatus : {
      isLoading : false,
      isError : false
    },
}

export const _fetchLikedMovies = createAsyncThunk('likedMovies/fetchLikedMovies', async() => {
  const {data} = await axios.get('http://localhost:3000/likedMovies')
  return data
})


export const _addLikedMovies = createAsyncThunk('likedMovies/addLikedMovies', async(movie) => {
  const res = await axios.post('http://localhost:3000/likedMovies',movie)
  return res.data
})

export const _removeLikedMovies = createAsyncThunk('likedMovies/removeLikedMovies', async(id) => {
  const res = await axios.delete(`http://localhost:3000/likedMovies/${id}`)
  return id
})


export const _fetchIsLiked = createAsyncThunk('likedMovies/fetchIsLiked', async(id) => {
  const {data} = await axios.get(`http://localhost:3000/likedMovies/${id}`)
  return  data
})


export const likedMovies = createSlice({
    name : 'liked movies',
    initialState,

  
    extraReducers : (builder) => {

      builder

      //FETCH
      .addCase(_fetchLikedMovies.fulfilled, (state, action) => {
        state.likedMovies = action.payload
        state.moviesStatus = {
          isError : false,
          isLoading : false
        }
      })

      .addCase(_fetchLikedMovies.pending, (state, action) => {
        state.moviesStatus = {
          isError : false,
          isLoading : true
        }
      })

      .addCase(_fetchLikedMovies.rejected, (state, action) => {
        state.moviesStatus = {
          isError : true,
          isLoading : false
        }
      })


      //POST
      .addCase(_addLikedMovies.fulfilled, (state, action) => {
        state.likedMovies.push(action.payload)
        state.moviesStatus = {
          isError : false,
          isLoading : false
        }
      })


      .addCase(_addLikedMovies.pending, (state, action) => {
        state.moviesStatus = {
          isError : false,
          isLoading : true
        }
      })
      
      .addCase(_addLikedMovies.rejected, (state, action) => {
        state.moviesStatus = {
          isError : true,
          isLoading : false
        }
      })


      //DELETE
      .addCase(_removeLikedMovies.fulfilled, (state, action) => {
        const id = action.payload
        const idx = state.likedMovies.findIndex(item => item.id == id)
        state.likedMovies.splice(idx, 1)

        state.moviesStatus = {
          isError : false,
          isLoading : true
        }
      })
      .addCase(_removeLikedMovies.pending, (state, action) => {
        state.moviesStatus = {
          isError : true,
          isLoading : false
        }
      })
      .addCase(_removeLikedMovies.rejected, (state, action) => {
        state.moviesStatus = {
          isError : true,
          isLoading : false
        }
      })

      
    }
})

export default likedMovies.reducer