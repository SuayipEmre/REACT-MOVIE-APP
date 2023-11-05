import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


export const _fetchSearchMovie = createAsyncThunk('search/fetchSearchMovie', async (keyword) => {
    const res = await axios.get(`${import.meta.env.VITE_API_BASE_ENDPOINT}/search/movie?query=${keyword}&language=tr&api_key=${import.meta.env.VITE_API_KEY}`)
    return res.data.results
})


const initialState = {
    movies: [],
    moviesStatus : {
        isError : false,
        isLoading : false,
    },
    searchTitle: '',

}

export const searchMovies = createSlice({
    name: 'searchMovie',
    initialState,

    reducers: {
        _setSearchTitle: (state, action) => {
           
            state.searchTitle = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(_fetchSearchMovie.fulfilled, (state, action) => {
                state.movies = action.payload
                state.moviesStatus = {
                    isError: false,
                    isLoading : false
                }
            })

            .addCase(_fetchSearchMovie.pending, (state, action) => {
                console.log('loading');
                state.moviesStatus = {
                    isError: false,
                    isLoading : true
                }
            })

            .addCase(_fetchSearchMovie.rejected, (state, action) => {
                console.log(action.error.message);
                state.moviesStatus = {
                    isError: true,
                    isLoading : false
                }
            })
    }

})

export const { _setSearchTitle } = searchMovies.actions
export default searchMovies.reducer