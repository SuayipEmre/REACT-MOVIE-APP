import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchSearchMovie } from '~/redux/features/movie/search/actions';
import { useMoviesIsError } from '~/redux/features/movie/search/hooks';
import { Loading } from '~/components/loading';
import { Error } from '~/components/error';
import classNames from 'classnames';
import { MoviesContent } from './moviesContent';

export const MoviesBySearch = () => {
  const { title } = useParams()
  const isMoviesError = useMoviesIsError()
  const isMoviesLoading = useMoviesIsError()

  useEffect(() => {
    fetchSearchMovie(title)
  }, [title])

  const renderItems = () => {
    if (isMoviesError) return <Error />
    else if (isMoviesLoading) return <Loading />
    return <>
      <MoviesContent title={title} />
    </>

  }

  return (
    <div className={classNames('', {
      "flex items-center justify-center": isMoviesError
    })}>
      {
        renderItems()
      }
    </div>
  )
}
