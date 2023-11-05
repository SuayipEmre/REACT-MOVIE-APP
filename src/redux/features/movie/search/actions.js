import { store } from "~/redux/app";
import { _fetchSearchMovie, _setSearchTitle } from ".";




export const fetchSearchMovie = async (keyword) => await store.dispatch((_fetchSearchMovie(keyword)))
export const setSearchTitle = (title) =>  store.dispatch((_setSearchTitle(title)))