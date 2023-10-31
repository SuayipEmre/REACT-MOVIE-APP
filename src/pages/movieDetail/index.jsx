import classNames from 'classnames'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { SimilarMovies } from '~/components/similarMovies'
import { fetchMovieDetail } from '~/redux/features/movie/details/actions'
import { useIsMovieError, useIsMovieLoading, useMovieDetail } from '~/redux/features/movie/details/hooks'
import { fetchSimilarMovies } from '~/redux/features/movie/similar/actions'

export const MovieDetail = () => {
  const { id } = useParams()

  const isLoading = useIsMovieLoading()
  const isError = useIsMovieError()
  const movieDetail = useMovieDetail()



  const fetchData = async (id) => {
    await fetchMovieDetail(id)
  }
  useEffect(() => {

    if (!isLoading && !isError) fetchData(id)


  }, [id])







  return (
    <>
      <div className=' '>




        <div className='grid grid-cols-4   mt-4  gap-4'>

          <div className="col-span-4 lg:col-span-2 relative  ">
            <h3 className='absolute top-0 inset-x-8 bg-black/20 rounded-sm text-center  '>
              {
                movieDetail.title
              }


            </h3>

            <div>

              <img className='rounded-lg' src={`${import.meta.env.VITE_API_IMAGE_PATH}${movieDetail.backdrop_path}`} alt="" />

            </div>

            <>
              {
                movieDetail?.vote_average ?
                  (
                    <>
                      <div className={classNames('absolute right-2   text-black px-2 rounded-full bottom-2', {

                        "bg-avgColor-default": Math.round(movieDetail?.vote_average) > 8.5,
                        "bg-avgColor-orange": Math.round(movieDetail?.vote_average) < 8.5,
                        "bg-avgColor-red": Math.round(movieDetail?.vote_average) < 5,
                      })}>
                        <p>
                          {
                            Math.round(movieDetail?.vote_average)

                          }
                        </p>


                      </div>
                    </>
                  ) : (
                    <>
                      <div className='absolute right-2  bg-slate-300 text-black px-2 rounded-full bottom-2'>
                        <p>
                          0
                        </p>


                      </div>
                    </>
                  )

              }
            </>
          </div>

          <div className='col-span-4 lg:col-span-2  '>

            <div className='grid grid-cols-1 gap-3 md:gap-6'>
              <h5 className='col-span-1'>Orjinal başlık : {movieDetail?.original_title} </h5>
              {movieDetail.tagline && <p className='col-span-1'>Slogan : <span className='text-red-700'>{movieDetail?.tagline}</span></p>}
              <p className='col-span-1'>{movieDetail?.overview}</p>
              <p className='col-span-1'>Yayın Tarihi : {movieDetail.release_date}</p>
              <p className='col-span-1'> Yayın dili :{movieDetail.original_language}</p>
              <p className='col-span-1'>Bütçe : {movieDetail.budget} </p>
            </div>


          </div>
        </div>




        <div className='mt-12 '>
          <h3 className=' mx-4 mb-6 text-start font-semibold tracking-wider'>Benzer türdeki Filmleri incelemek ister misin ?</h3>
          <SimilarMovies id={id} />
        </div>


      </div>
    </>
  )
}



/*



*/