import { useSelector } from "react-redux";

export const useGenres = () => useSelector(state => state.genre.genres)
export const useIsGenresLoading = () => useSelector(state => state.genre.genresStatus.isLoading)
export const useIsGenreError = () => useSelector(state => state.genre.genresStatus.isError)


export const useMoviesByGenre = () => useSelector(state => state.genre.moviesByGenre)
export const useIsMoviesLoading = () => useSelector(state => state.genre.moviesStatus.isLoading)
export const useIsMoviesError = () => useSelector(state => state.genre.moviesStatus.isError)