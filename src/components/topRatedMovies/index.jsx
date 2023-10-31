import React from 'react'
import { useIsTopRatedMoviesError, useIsTopRatedMoviesLoading, useTopRatedMovies } from '~/redux/features/movie/topRated/hooks'
import { TopRatedItem } from './topRatedItems';
import { Error } from '../error';
import { Loading } from '../loading';
import { Title } from '../title';
import { NoMatchesWarning } from '../noMatches';
import { filterMovies } from '~/helpers/filterMovies';
import { MatchesFound } from '../matchesFound';

export const TopRatedMovies = () => {


  const isTopRatedMoviesLoading = useIsTopRatedMoviesLoading()
  const isTopRatedMoviesError = useIsTopRatedMoviesError()
  const topRatedMovies = useTopRatedMovies()


  const filteredMovies = filterMovies(topRatedMovies)

  return (
    <div className='mt-24'>
      <Title title={'En Yüksek Puanlı filmler'} />

      {
        isTopRatedMoviesError ? <Error /> : (
          <>
            {
              isTopRatedMoviesLoading ? <Loading />
                :
                (
                  <>
                    {
                      filteredMovies.length == 0 ? <NoMatchesWarning /> : (
                        <>
                          {
                            <MatchesFound movie={filteredMovies} />
                          }
                          {
                            <div className='grid grid-cols-12 gap-6'>
                              {
                                filteredMovies.map((movie, idx) => (
                                  <TopRatedItem movie={movie} key={idx} />
                                ))
                              }
                            </div>
                          }</>
                      )
                    }
                  </>
                )
            }
          </>
        )
      }
    </div>
  )
}
