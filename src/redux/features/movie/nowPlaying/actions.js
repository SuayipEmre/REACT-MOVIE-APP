import { store } from "~/redux/app";
import { _FetchNowPlayingMovies } from ".";




export const fetchNowPlayingMovies = async() => await store.dispatch((_FetchNowPlayingMovies()))