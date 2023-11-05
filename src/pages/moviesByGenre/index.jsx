import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Error } from '~/components/error'
import { fetchMoviesByGenre } from '~/redux/features/movie/genre/actions'
import { useIsMoviesError, useIsMoviesLoading } from '~/redux/features/movie/genre/hooks'
import { MoviesContent } from './moviesContent'
import { Loading } from '~/components/loading'
import { useLocation } from 'react-router-dom';
export const MoviesByGenre = () => {

    const {genreTitle} = useParams()
    const {state} = useLocation()

    const isLoading = useIsMoviesLoading()
    const isError = useIsMoviesError()

 

    useEffect(() => {
        fetchMoviesByGenre(genreTitle)
    },[genreTitle])

  return (
    <div>
      
      

    {
      isError ? <Error /> : (
        <>
        {
          isLoading ? <Loading /> : <MoviesContent  genreTitle={state}/>
        }
        </>
      )
    }
     

    
    </div>
  )
}
