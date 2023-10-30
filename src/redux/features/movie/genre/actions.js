import { store } from "~/redux/app";
import { _fetchGenre, _fetchMoviesByGenre } from ".";

export const fetchGenre = async() => await store.dispatch(_fetchGenre())
export const fetchMoviesByGenre = async(id) => await store.dispatch(_fetchMoviesByGenre(id))