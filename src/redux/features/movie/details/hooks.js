import { useSelector } from "react-redux";





export const useMovieDetail = () => useSelector(state => state.movieDetail.movie)
export const useIsMovieLoading = () => useSelector(state => state.movieDetail.movieStatus.isLoading)
export const useIsMovieError = () => useSelector(state => state.movieDetail.movieStatus.isError)