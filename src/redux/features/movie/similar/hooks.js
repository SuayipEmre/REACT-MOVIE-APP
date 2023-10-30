import { useSelector } from "react-redux"




export const useIsSimilarMoviesLoading = () => useSelector(state => state.similarMovies.similarMoviesStatus.isLoading)
export  const useIsSimilarMoviesError = () => useSelector(state => state.similarMovies.similarMoviesStatus.isError)
export  const useSimilarMovies = () => useSelector(state => state.similarMovies.similarMovies)