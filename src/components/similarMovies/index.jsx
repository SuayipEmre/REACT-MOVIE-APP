import React, { useEffect } from 'react'
import { fetchSimilarMovies } from '~/redux/features/movie/similar/actions'
import { useIsSimilarMoviesError, useIsSimilarMoviesLoading, useSimilarMovies } from '~/redux/features/movie/similar/hooks'
import { Error } from '../error'
import { Loading } from '../loading'
import { NoMatchesWarning } from '../search/noMatches'
import { filterMovies } from '~/helpers/filterMovies'
import { MatchesFound } from '../search/matchesFound'
import { MovieCard } from '../movieCart'

export const SimilarMovies = ({ id }) => {

  const isSimilarMoviesLoading = useIsSimilarMoviesLoading()
  const isSimilarMoviesError = useIsSimilarMoviesError()
  const similarMovies = useSimilarMovies()

  const fetchData = async (id) => {
    await fetchSimilarMovies(id)
  }


  const filteredMovies = filterMovies(similarMovies)


  const renderItems = () => {
    if(isSimilarMoviesError ) return <Error />
    else if(isSimilarMoviesLoading) return <Loading />
    return (

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
                    <MovieCard key={idx} movie={item} />
                  ))
                }
              </div>
            </>
          )
      }
    </>
    )
  }

  useEffect(() => {
    fetchData(id)
  }, [id])
  return (
    <div>
      {
        renderItems()
      }
    </div>
  )
}
