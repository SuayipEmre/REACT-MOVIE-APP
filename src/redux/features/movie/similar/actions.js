import { store } from "~/redux/app";
import { _fetchSimilarMovies } from ".";




export const fetchSimilarMovies = async(id) => await store.dispatch((_fetchSimilarMovies(id)))