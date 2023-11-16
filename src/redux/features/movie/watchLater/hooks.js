import { useSelector } from "react-redux";


export const useWatchLaterMovies = () => useSelector(state => state.watchLater.movies)
export const useWatchLaterStatus = () => useSelector(state => state.watchLater.moviesStatus)
export const useIsLater = () => useSelector(state => state.watchLater.isLater)