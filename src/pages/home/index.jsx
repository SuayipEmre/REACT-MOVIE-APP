import React, { useEffect } from 'react'
import { NowPlaying } from '~/components/nowPlaying';
import { PopularMovies } from '~/components/popularMovies'
import { TopRatedMovies } from '~/components/topRatedMovies';
import { fetchNowPlayingMovies } from '~/redux/features/movie/nowPlaying/actions';
import { fetchPopularMovies } from '~/redux/features/movie/popular/actions'
import { fetchTopRatedMovies } from '~/redux/features/movie/topRated/actions';

export const Home = () => {


  

  useEffect(() => {
    fetchPopularMovies()
    fetchTopRatedMovies()
    fetchNowPlayingMovies()
  },[])
  
  return (
    <div>
      <PopularMovies />
      <TopRatedMovies />
      <NowPlaying />
    </div>
  ) 
}
