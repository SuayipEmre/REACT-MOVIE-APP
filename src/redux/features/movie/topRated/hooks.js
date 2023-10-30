import { useSelector } from "react-redux"




export  const useTopRatedMovies = () => useSelector(state => state.topRated.topRatedMovies)
export const useIsTopRatedMoviesLoading = () => useSelector(state => state.topRated.topRatedMoviesStatus.isLoading)
export  const useIsTopRatedMoviesError = () =>  useSelector(state => state.topRated.topRatedMoviesStatus.isError)