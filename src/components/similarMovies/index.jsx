import React, { useEffect } from 'react'
import { fetchSimilarMovies } from '~/redux/features/movie/similar/actions'
import { useIsSimilarMoviesError, useIsSimilarMoviesLoading, useSimilarMovies } from '~/redux/features/movie/similar/hooks'
import { Error } from '../error'
import { Loading } from '../loading'
import { SimilarMovieItems } from './movieItems'
import { NoMatchesWarning } from '../noMatches'
import { filterMovies } from '~/helpers/filterMovies'

export const SimilarMovies = ({id}) => {

    const isSimilarMoviesLoading = useIsSimilarMoviesLoading()
    const isSimilarMoviesError = useIsSimilarMoviesError()
    const similarMovies = useSimilarMovies()

    const fetchData = async (id) => {
      await fetchSimilarMovies(id)
    }


    const filteredMovies = filterMovies(similarMovies)


    useEffect(() => {
      fetchData(id)
    },[id])
  return (
    <div>

        {
            isSimilarMoviesError ? <Error /> :
             (
             <>
             {
                isSimilarMoviesLoading ? <Loading /> : 
                (
                  <>
                    {
                    filteredMovies.length == 0 ? <NoMatchesWarning /> : 
                    (
                      <div className='grid grid-cols-12 gap-6'>
                   
                      {
                         filteredMovies.map((item, idx) => (
                           <SimilarMovieItems key={idx} movie={item} />
                       ))
                      }
                  </div>
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
