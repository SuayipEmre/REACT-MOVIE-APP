import React, { useEffect } from 'react'
import {  useParams } from 'react-router-dom'
import { Loading } from '~/components/loading'
import { DetailContent } from '~/components/moviedetails/contentStructure'
import { Search } from '~/components/search/filterSearch'
import { SimilarMovies } from '~/components/similarMovies'
import { fetchMovieDetail } from '~/redux/features/movie/details/actions'
import { useIsMovieError, useIsMovieLoading } from '~/redux/features/movie/details/hooks'

export const MovieDetail = () => {
  const { id } = useParams()

  const isLoading = useIsMovieLoading()
  const isError = useIsMovieError()

  

 

  useEffect(() => {
    fetchMovieDetail(id)
  }, [id])








  return (
    <>
      <div className=' '>


        {
          isError ? <Error /> :
            (<>
              {
                isLoading ? (
                  <div className='flex items-center justify-center'>
                    <Loading />
                  </div>
                ) :
                  (

                    <DetailContent />
                  )
              }
            </>)
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


