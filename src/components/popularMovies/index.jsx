import React from 'react'
import { useIsPopularMoviesError, useIsPopularMoviesLoading, usePopularMovies } from '~/redux/features/movie/popular/hooks';
import { NoMatchesWarning } from '../search/noMatches';
import { filterMovies } from '~/helpers/filterMovies';
import { Error } from '../error';
import { Loading } from '../loading';
import { MatchesFound } from '../search/matchesFound';
import classNames from 'classnames';
import { MovieCard } from '../movieCart';



export const PopularMovies = () => {

  const popularMovies = usePopularMovies()
  const isPopularMoviesLoading = useIsPopularMoviesLoading()
  const isPopularMoviesError = useIsPopularMoviesError()
  const filteredMovies = filterMovies(popularMovies)

  const renderItems = () => {
    if (isPopularMoviesError) return <Error />
    else if (isPopularMoviesLoading) return (
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

            <div className='grid grid-cols-12 gap-6'>
              {
                filteredMovies.map((movie, idx) => (
                  <MovieCard movie={movie} key={idx} />
                ))
              }
            </div>
          </>

      }
    </>
    )

  }



  return (
    <div className={classNames('', {
      "flex items-center justify-center": isPopularMoviesError
    })}>

     {
      renderItems()
     }


    </div>
  )
}
