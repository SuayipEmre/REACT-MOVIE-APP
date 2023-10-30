import { store } from "~/redux/app";
import { _fetchUpComingMovies } from ".";




export const fetchUpComingMovies = async() => await store.dispatch((_fetchUpComingMovies()))