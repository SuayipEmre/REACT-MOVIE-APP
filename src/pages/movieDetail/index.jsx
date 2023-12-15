import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Loading } from '~/components/loading'
import { DetailContent } from '~/components/moviedetails/contentStructure'
import { Search } from '~/components/search/filterSearch'
import { SimilarMovies } from '~/components/similarMovies'
import { fetchMovieDetail } from '~/redux/features/movie/details/actions'
import { useIsMovieError, useIsMovieLoading } from '~/redux/features/movie/details/hooks'
import { isLikedControl, setIsLiked } from '~/redux/features/movie/likedMovies/actions'
import { useIsLiked } from '~/redux/features/movie/likedMovies/hooks'
import { setIsLater, watchLaterControl } from '~/redux/features/movie/watchLater/actions'
import { useIsLater } from '~/redux/features/movie/watchLater/hooks'

export const MovieDetail = () => {
  const { id } = useParams()
  const isLater = useIsLater()
  const isLiked = useIsLiked()
  const isLoading = useIsMovieLoading()
  const isError = useIsMovieError()




  const handleFirstLoad = () => {
    fetchMovieDetail(id)
    watchLaterControl(id)
    setIsLater(isLater)

    isLikedControl(id)
    setIsLiked(isLiked)

  }

  useEffect(() => {
    handleFirstLoad()
  }, [id])


  const renderItems = () => {
    if (isError) return <Error />
    else if (isLoading) return <div className='flex items-center justify-center'>
      <Loading />
    </div>

    return (
      <DetailContent id={id} />

    )

  }





  return (
    <>
      <div>

        {
          renderItems()
        }


        <div className='mt-12 '>
          <h3 className=' mx-4 mb-6 text-start font-semibold tracking-wider'>Benzer türdeki Filmleri incelemek ister misin ?</h3>
          <Search title='Benzer Filmler içerisinde ara' />
          <br /><br />
          <SimilarMovies id={id} />
        </div>


      </div>
    </>
  )
}


