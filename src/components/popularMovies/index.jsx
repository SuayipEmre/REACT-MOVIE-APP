import React from 'react'
import { useIsPopularMoviesError, useIsPopularMoviesLoading, usePopularMovies } from '~/redux/features/movie/popular/hooks';
import { MovieItem } from './movieItems';
import { Title } from '../title';
import { NoMatchesWarning } from '../noMatches';
import { filterMovies } from '~/helpers/filterMovies';
import { Error } from '../error';
import { Loading } from '../loading';
import { MatchesFound } from '../matchesFound';


export const PopularMovies = () => {

  const popularMovies = usePopularMovies()
  const isPopularMoviesLoading = useIsPopularMoviesLoading()
  const isPopularMoviesError = useIsPopularMoviesError()  
  const filteredMovies = filterMovies(popularMovies)




  return (
    <div className='mt-24'>

      <Title title={'Son dönemde popüler '} />



      <>
        {
          isPopularMoviesError ? <Error /> : (
            <>
              {
                isPopularMoviesLoading ? <Loading /> :
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
