

import { useSelector } from "react-redux";

export const usePopularMovies = () => useSelector(state => state.popularMovies.movies)
