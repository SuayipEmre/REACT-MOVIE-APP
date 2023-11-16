import { store } from "~/redux/app";
import { _addWatchLaterMovie, _fetchWatchLaterMovies, _removeWatchLaterMovie, _setIsLater, _watchLaterControl } from ".";

export const fetchWatchLaterMovies = async() => await store.dispatch(_fetchWatchLaterMovies())

export const addWatchLaterMovie = async(movie) => await store.dispatch(_addWatchLaterMovie(movie))

export const removeWatchLaterMovie = async(id) => await store.dispatch(_removeWatchLaterMovie(id))

export const watchLaterControl = async(id) => await store.dispatch(_watchLaterControl(id))


export const setIsLater = (state) => store.dispatch(_setIsLater(state))