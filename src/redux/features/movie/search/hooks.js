import { useSelector } from "react-redux";



export const useSearchMovies = () => useSelector(state => state.searchMovies.movies)
export const useSearchTitle = () => useSelector(state => state.searchMovies.searchTitle)
export const useMoviesIsError = () => useSelector(state => state.searchMovies.moviesStatus.isError)
export const useMoviesIsLoading = () => useSelector(state => state.searchMovies.moviesStatus.isLoading)