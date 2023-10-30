import { store } from "~/redux/app";
import { _fetchTopRatedMovies } from ".";




export const fetchTopRatedMovies = async() => await store.dispatch((_fetchTopRatedMovies()))