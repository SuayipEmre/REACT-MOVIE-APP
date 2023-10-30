import { useSelector } from "react-redux"




export  const useUpComingMovies = () => useSelector(state => state.upComing.upComingMovies)
export const useIsUpComingMoviesLoading= () => useSelector(state => state.upComing.upComingMoviesStatus.isLoading)
export  const useIsUpComingMoviesError = () =>  useSelector(state => state.upComing.upComingMoviesStatus.isError)