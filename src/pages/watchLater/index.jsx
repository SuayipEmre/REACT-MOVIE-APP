import React, { useEffect } from 'react'
import { fetchWatchLaterMovies } from '~/redux/features/movie/watchLater/actions'
import { WatchLaterMoviesContent } from './content'
import { useWatchLaterStatus } from '~/redux/features/movie/watchLater/hooks'
import { Loading } from '~/components/loading'
import { Title } from '~/components/title'
import { Search } from '~/components/search/filterSearch'

export const WatchLater = () => {

  const { isError, isLoading } = useWatchLaterStatus()

  useEffect(() => {
    fetchWatchLaterMovies()
  }, [])

  const renderItems = () => {
    if (isError) return <Error />
    else if (isLoading) return <Loading />
    return (
      <>
        <Search title='Listen içinde ara' />
        <WatchLaterMoviesContent />
      </>
    )
  }


  return (
    <div>
      <Title title='Sonra İzle Listem' />
      {
        renderItems()
      }
    </div>
  )
}
