import { useSelector } from "react-redux";

export const useLikedMovies = () => useSelector(state => state.likedMovies.likedMovies)

export const useLikedMoviesStatus = () => useSelector(state => state.likedMovies.moviesStatus)
