import React, { useEffect } from 'react'
import { fetchSimilarMovies } from '~/redux/features/movie/similar/actions'
import { useIsSimilarMoviesError, useIsSimilarMoviesLoading, useSimilarMovies } from '~/redux/features/movie/similar/hooks'
import { Error } from '../error'
import { Loading } from '../loading'
import { SimilarMovieItems } from './movieItems'
import { NoMatchesWarning } from '../search/noMatches'
import { filterMovies } from '~/helpers/filterMovies'
import { MatchesFound } from '../search/matchesFound'

export const SimilarMovies = ({ id }) => {

  const isSimilarMoviesLoading = useIsSimilarMoviesLoading()
  const isSimilarMoviesError = useIsSimilarMoviesError()
  const similarMovies = useSimilarMovies()

  const fetchData = async (id) => {
    await fetchSimilarMovies(id)
  }


  const filteredMovies = filterMovies(similarMovies)


  useEffect(() => {
    fetchData(id)
  }, [id])
  return (
    <div>

      {
        isSimilarMoviesError ? <Error /> :
          (
            <>
              {
                isSimilarMoviesLoading ? (
                <div className='flex items-center justify-center'>
                  <Loading /> 
                </div>
                ):
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
                                  filteredMovies.map((item, idx) => (
                                    <SimilarMovieItems key={idx} movie={item} />
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
    </div>
  )
}
