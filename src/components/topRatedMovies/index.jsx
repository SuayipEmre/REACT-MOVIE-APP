import React from 'react'
import { useIsTopRatedMoviesError, useIsTopRatedMoviesLoading, useTopRatedMovies } from '~/redux/features/movie/topRated/hooks'
import { Error } from '../error';
import { Loading } from '../loading';
import { Title } from '../title';
import { NoMatchesWarning } from '../search/noMatches';
import { filterMovies } from '~/helpers/filterMovies';
import { MatchesFound } from '../search/matchesFound';
import { MovieCard } from '../movieCart';

export const TopRatedMovies = () => {


  const isTopRatedMoviesLoading = useIsTopRatedMoviesLoading()
  const isTopRatedMoviesError = useIsTopRatedMoviesError()
  const topRatedMovies = useTopRatedMovies()
  const filteredMovies = filterMovies(topRatedMovies)


  const renderItems = () => {
    if (isTopRatedMoviesError) return <Error />
    else if (isTopRatedMoviesLoading) return (
      <div className='flex items-center justify-center'>
        <Loading />
      </div>
    )

    return (
      <>
        {
          filteredMovies.length == 0 ? <NoMatchesWarning /> :
            <>
              {
                <MatchesFound movie={filteredMovies} />
              }
              {
                <div className='grid grid-cols-12 gap-6'>
                  {
                    filteredMovies.map((movie, idx) => (
                      <MovieCard movie={movie} key={idx} />
                    ))
                  }
                </div>
              }</>

        }
      </>
    )
  }


  return (
    <div className='mt-24'>
      <Title title={'En Yüksek Puanlı filmler'} />
      {
        renderItems()
      }
    </div>
  )
}
