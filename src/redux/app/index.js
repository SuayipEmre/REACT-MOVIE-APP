import { configureStore } from "@reduxjs/toolkit";
import genre from "../features/movie/genre";
import  popularMovies  from "../features/movie/popular";
import movieDetail  from "../features/movie/details";
import similarMovies  from "../features/movie/similar";
import topRated from "../features/movie/topRated";
import nowPlaying from "../features/movie/nowPlaying";
import upComing from "../features/movie/upComing";

export const store = configureStore ({
    reducer : {
        genre ,
        popularMovies,
        movieDetail,
        similarMovies,
        topRated,
        nowPlaying,
        upComing,
    }
})