import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    movies: [],
    moviesStatus: {
        isLoading: false,
        isError: false
    },
    isLater: false
}

export const _fetchWatchLaterMovies = createAsyncThunk('watchLater/fetchWatchLaterMovies', async () => {
    const { data } = await axios.get('http://localhost:3000/watchLater')
    return data
})

export const _addWatchLaterMovie = createAsyncThunk('watchLater/addWatchLaterMovie', async (movie) => {
    const { data } = await axios.post('http://localhost:3000/watchLater', movie)
    return data
})

export const _removeWatchLaterMovie = createAsyncThunk('watchLater/removeWatchLaterMovie', async (id) => {
    const res = await axios.delete(`http://localhost:3000/watchLater/${id}`)
    return id
})

export const _watchLaterControl = createAsyncThunk('watchLater/watchLaterControl', async (id) => {
    const { data } = await axios.get(`http://localhost:3000/watchLater/${id}`)
    return data
})


export const watchLater = createSlice({
    name: 'watch later',
    initialState,

    reducers: {

        _setIsLater: (state, action) => {
            state.isLater = action.payload
        }
    },

    extraReducers: (builder) => {
        builder

            //FETCH
            .addCase(_fetchWatchLaterMovies.fulfilled, (state, action) => {
                state.movies = action.payload
                state.moviesStatus = {
                    isError: false,
                    isLoading: false
                }
            })

            .addCase(_fetchWatchLaterMovies.pending, (state, action) => {

                state.moviesStatus = {
                    isError: false,
                    isLoading: true
                }
            })

            .addCase(_fetchWatchLaterMovies.rejected, (state, action) => {
                console.log(action.error.message);
                state.moviesStatus = {
                    isError: true,
                    isLoading: false
                }
            })

            //POST
            .addCase(_addWatchLaterMovie.fulfilled, (state, action) => {
                state.movies.push(action.payload)
                state.moviesStatus = {
                    isError: false,
                    isLoading: false
                }
            })

            .addCase(_addWatchLaterMovie.pending, (state, action) => {
                state.moviesStatus = {
                    isError: false,
                    isLoading: true,
                }
            })
            .addCase(_addWatchLaterMovie.rejected, (state, action) => {
                state.moviesStatus = {
                    isError: true,
                    isLoading: false,
                }
            })

            //DELETE
            .addCase(_removeWatchLaterMovie.fulfilled, (state, action) => {
                const id = action.payload
                const idx = state.movies.findIndex(item => item.id == id)
                state.movies.splice(idx, 1)
                state.moviesStatus = {
                    isError: false,
                    isLoading: false,
                }
            })

            .addCase(_removeWatchLaterMovie.pending, (state, action) => {
                state.moviesStatus = {
                    isError: false,
                    isLoading: true,
                }
            })

            .addCase(_removeWatchLaterMovie.rejected, (state, action) => {
                state.moviesStatus = {
                    isError: true,
                    isLoading: false,
                }
            })

            //CONTROL
            .addCase(_watchLaterControl.fulfilled, (state, action) => {
                state.isLater = true
            })
            .addCase(_watchLaterControl.pending, (state, action) => {
                state.isLater = false
            })
            .addCase(_watchLaterControl.rejected, (state, action) => {
                state.isLater = false
            })
    }
})

export const { _setIsLater } = watchLater.actions
export default watchLater.reducer