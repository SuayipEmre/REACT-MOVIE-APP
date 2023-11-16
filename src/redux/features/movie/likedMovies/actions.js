import { store } from "~/redux/app";
import {  _addLikedMovies, _fetchLikedMovies, _isLikedControl, _removeLikedMovies, _setIsLiked } from ".";


export const fetchLikedMovies = async () => await store.dispatch(_fetchLikedMovies())

export const addLikedMovies = async (movie) => await store.dispatch(_addLikedMovies(movie))

export const removeLikedMovies = async (id) => await store.dispatch(_removeLikedMovies(id))

export const isLikedControl = async (id) => await store.dispatch(_isLikedControl(id))

export const setIsLiked  = (state) => store.dispatch(_setIsLiked(state))


