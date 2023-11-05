import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchSearchMovie } from '~/redux/features/movie/search/actions';
import { useMoviesIsError } from '~/redux/features/movie/search/hooks';
import { MoviesContent } from './moviesContent';
import { Loading } from '~/components/loading';

export const MoviesBySearch = () => {
  const {title} = useParams()
  const isMoviesError = useMoviesIsError()
  const isMoviesLoading = useMoviesIsError()





  useEffect(() => {
     fetchSearchMovie(title)
  },[title])
  return (
    <div>
      {
        isMoviesError ? <Error /> : 
        (
          <>
          {
            isMoviesLoading ? <Loading />  : (<MoviesContent title={title} />)
          }</>
        )
      }
    </div>
  )
}
