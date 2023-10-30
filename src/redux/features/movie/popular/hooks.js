

import { useSelector } from "react-redux";

export const usePopularMovies = () => useSelector(state => state.popularMovies.movies)

export const useIsPopularMoviesLoading = () => useSelector(state => state.popularMovies.moviesStatus.isLoading)
export const useIsPopularMoviesError = () => useSelector(state => state.popularMovies.moviesStatus.isError)
