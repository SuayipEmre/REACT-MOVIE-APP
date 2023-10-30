import React, { useEffect } from 'react'
import { fetchSimilarMovies } from '~/redux/features/movie/similar/actions'
import { useIsSimilarMoviesError, useIsSimilarMoviesLoading, useSimilarMovies } from '~/redux/features/movie/similar/hooks'
import { Error } from '../error'
import { Loading } from '../loading'
import { SimilarMovieItems } from './movieItems'

export const SimilarMovies = ({id}) => {

    const isSimilarMoviesLoading = useIsSimilarMoviesLoading()
    const isSimilarMoviesError = useIsSimilarMoviesError()
    const similarMovies = useSimilarMovies()

    const fetchData = async (id) => {
      await fetchSimilarMovies(id)
    }



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
                   <div className='grid grid-cols-12 gap-6'>
                   
                       {
                          similarMovies.map((item, idx) => (
                            <SimilarMovieItems key={idx} movie={item} />
                        ))
                       }
                   </div>
                )
             }
             </>
             )

        }
    </div>
  )
}
