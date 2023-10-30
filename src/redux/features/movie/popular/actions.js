


import { store } from "~/redux/app";
import { _fetchPopularMovies } from ".";

export const fetchPopularMovies = async() => await store.dispatch(_fetchPopularMovies())