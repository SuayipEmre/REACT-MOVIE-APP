import React, { useEffect } from 'react'
import { Title } from '~/components/title'
import { fetchLikedMovies } from '~/redux/features/movie/likedMovies/actions'
import { LikedMoviesContent } from './content'
import { useLikedMoviesStatus } from '~/redux/features/movie/likedMovies/hooks'
import { Error } from '~/components/error'
import { Loading } from '~/components/loading'
import { Search } from '~/components/search/filterSearch'
import { filterMovies } from '~/helpers/filterMovies'


export const LikedMovies = () => {
  const { isLoading, isError } = useLikedMoviesStatus()



  useEffect(() => {
    fetchLikedMovies()
  }, [])

  return (
    <div>
      <Title title='Beğendiğin filmler' />
      {
        isError ? <Error /> : (
          <>
            {
              isLoading ? (
                <div className='flex items-center justify-center'>
                  <Loading />
                </div>
              ) : (
                <div className='flex flex-col gap-6'>
                <Search title='Beğenilenlerde Ara' />
                  <LikedMoviesContent />
                </div>
              )
            }
          
          </>
        )
      }
    </div>
  )
}