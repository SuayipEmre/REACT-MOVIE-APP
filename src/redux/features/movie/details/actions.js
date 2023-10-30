import { store } from "~/redux/app";
import { _fetchMovieDetailByID } from ".";



export const fetchMovieDetail = async(id) => await store.dispatch(_fetchMovieDetailByID(id))