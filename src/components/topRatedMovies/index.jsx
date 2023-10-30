import React from 'react'
import { useIsTopRatedMoviesError, useIsTopRatedMoviesLoading, useTopRatedMovies } from '~/redux/features/movie/topRated/hooks'
import { TopRatedItem } from './topRatedItems';
import { Error } from '../error';
import { Loading } from '../loading';
import { Title } from '../title';
import { useSearchTitle } from '~/redux/features/search/hooks';
import { NoMatchesWarning } from '../noMatches';
import { filterMovies } from '~/helpers/filterMovies';

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
