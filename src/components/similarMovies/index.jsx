import React, { useEffect } from 'react'
import { fetchSimilarMovies } from '~/redux/features/movie/similar/actions'
import { useIsSimilarMoviesError, useIsSimilarMoviesLoading, useSimilarMovies } from '~/redux/features/movie/similar/hooks'
import { Error } from '../error'
import { Loading } from '../loading'
import { SimilarMovieItems } from './movieItems'
import { useSearchTitle } from '~/redux/features/search/hooks'
import { NoMatchesWarning } from '../noMatches'

export const SimilarMovies = ({id}) => {

    const isSimilarMoviesLoading = useIsSimilarMoviesLoading()
    const isSimilarMoviesError = useIsSimilarMoviesError()
    const similarMovies = useSimilarMovies()

    const fetchData = async (id) => {
      await fetchSimilarMovies(id)
    }


    const searchTitle = useSearchTitle()

  let filteredMovies = []
  filteredMovies = similarMovies

  if(searchTitle){
    filteredMovies = similarMovies.filter(item => item.title.toLowerCase().includes(searchTitle.toLowerCase()))
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
