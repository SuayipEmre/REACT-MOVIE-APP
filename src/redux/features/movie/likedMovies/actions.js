import { store } from "~/redux/app";
import { _addLikedMovies, _fetchIsLiked, _fetchLikedMovies, _removeLikedMovies } from ".";


export const fetchLikedMovies = async () =>  await store.dispatch(_fetchLikedMovies())

export const addLikedMovies = async (movie) => await store.dispatch(_addLikedMovies(movie))

export const removeLikedMovies = async (id) => await store.dispatch(_removeLikedMovies(id))


export const fetchIsLiked = async (id) => await store.dispatch(_fetchIsLiked(id))