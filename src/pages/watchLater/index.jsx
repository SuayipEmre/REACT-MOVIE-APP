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
  return (
    <>
      <Title title='Sonra İzle Listem' />
      <div>
        {
          isError ? <Error /> : (
            isLoading ? <Loading /> : (
              <>
                <Search title='Listen içinde ara'  />
                <WatchLaterMoviesContent />
              </>
            )
          )
        }
      </div>
    </>
  )
}
