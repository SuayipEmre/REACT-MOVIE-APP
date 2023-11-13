import React from 'react'
import { useIsPopularMoviesError, useIsPopularMoviesLoading, usePopularMovies } from '~/redux/features/movie/popular/hooks';
import { MovieItem } from './movieItems';
import { Title } from '../title';
import { NoMatchesWarning } from '../search/noMatches';
import { filterMovies } from '~/helpers/filterMovies';
import { Error } from '../error';
import { Loading } from '../loading';
import { MatchesFound } from '../search/matchesFound';
import classNames from 'classnames';



export const PopularMovies = () => {

  const popularMovies = usePopularMovies()
  const isPopularMoviesLoading = useIsPopularMoviesLoading()
  const isPopularMoviesError = useIsPopularMoviesError()
  const filteredMovies = filterMovies(popularMovies)




  return (
    <div className={classNames('', {
      "flex items-center justify-center": isPopularMoviesError
    })}>

      <>
        {
          isPopularMoviesError ? <Error /> : (
            <>
              <Title title={'Son dönemde popüler '} />
              {
                isPopularMoviesLoading ? (
                  <div className='flex items-center justify-center'>
                    <Loading />
                  </div>
                ) :
                  (

                    <>
                      {
                        filteredMovies.length == 0 ? <NoMatchesWarning /> :
                          (
                            <>
                              {
                                <MatchesFound movie={filteredMovies} />
                              }

                              <div className='grid grid-cols-12 gap-6'>


                                {
                                  filteredMovies.map((movie, idx) => (
                                    <MovieItem movie={movie} key={idx} />
                                  ))
                                }

                              </div>
                            </>
                          )
                      }
                    </>
                  )
              }
            </>
          )
        }

      </>


    </div>
  )
}
