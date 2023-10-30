import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { NowPlaying } from '~/components/nowPlaying';
import { PopularMovies } from '~/components/popularMovies'
import { TopRatedMovies } from '~/components/topRatedMovies';
import { UpComing } from '~/components/upComing';
import { fetchNowPlayingMovies } from '~/redux/features/movie/nowPlaying/actions';
import { fetchPopularMovies } from '~/redux/features/movie/popular/actions'
import { fetchTopRatedMovies } from '~/redux/features/movie/topRated/actions';
import { fetchUpComingMovies } from '~/redux/features/movie/upComing/actions';

export const Home = () => {


  const fetchData = async() => {
   await fetchPopularMovies()
   await fetchTopRatedMovies()
   await fetchNowPlayingMovies()
   await fetchUpComingMovies()
  }
  

  useEffect(() => {
    fetchData()
  },[])
  
  return (
    <div>
      <PopularMovies />
      <TopRatedMovies />
      <NowPlaying />
      <UpComing />
    </div>
  ) 
}
