import React, { useEffect } from 'react'
import { PopularMovies } from '~/components/popularMovies'
import { TopRatedMovies } from '~/components/topRatedMovies';
import { fetchPopularMovies } from '~/redux/features/movie/popular/actions'
import { fetchTopRatedMovies } from '~/redux/features/movie/topRated/actions';

export const Home = () => {


  console.log();
  

  useEffect(() => {
    fetchPopularMovies()
    fetchTopRatedMovies()
  },[])
  
  return (
    <div>
      <PopularMovies />
      <TopRatedMovies />
    </div>
  ) 
}
