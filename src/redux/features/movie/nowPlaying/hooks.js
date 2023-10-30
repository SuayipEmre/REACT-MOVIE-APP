import { useSelector } from "react-redux"




export  const useNowPlayingMovies = () => useSelector(state => state.nowPlaying.nowPlayingMovies)
export const useIsNowPlayingMoviesLoading = () => useSelector(state => state.nowPlaying.nowPlayingMoviesStatus.isLoading)
export  const useIsNowPlayingMoviesError = () =>  useSelector(state => state.nowPlaying.nowPlayingMoviesStatus.isError)