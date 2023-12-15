import React, { useEffect } from 'react'
import { NowPlaying } from '~/components/nowPlaying';
import { PopularMovies } from '~/components/popularMovies'
import { Search } from '~/components/search/filterSearch';
import { TopRatedMovies } from '~/components/topRatedMovies';
import { UpComing } from '~/components/upComing';
import { fetchNowPlayingMovies } from '~/redux/features/movie/nowPlaying/actions';
import { fetchPopularMovies } from '~/redux/features/movie/popular/actions'
import { fetchTopRatedMovies } from '~/redux/features/movie/topRated/actions';
import { fetchUpComingMovies } from '~/redux/features/movie/upComing/actions';
import { useProfileModal } from '~/redux/features/modal/profile/hooks';
import classNames from 'classnames';

export const Home = () => {

  const modal = useProfileModal()

  const fetchData = () => {
    fetchPopularMovies()
    fetchTopRatedMovies()
    fetchNowPlayingMovies()
    fetchUpComingMovies()
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div className={classNames('', {
      "opacity-50": modal
    })}>

      <div className='mb-4 md:mb-0   md:me-3 flex items-center justify-center md:justify-end'>
        <Search title='Sayfa içerisinde ara' />
      </div>
      <PopularMovies />
      <TopRatedMovies />
      <NowPlaying />
      <UpComing />
    </div>
  )
}
