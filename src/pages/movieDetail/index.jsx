import classNames from 'classnames'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Loading } from '~/components/loading'
import { Search } from '~/components/search/filterSearch'
import { SimilarMovies } from '~/components/similarMovies'
import { fetchMovieDetail } from '~/redux/features/movie/details/actions'
import { useIsMovieError, useIsMovieLoading, useMovieDetail } from '~/redux/features/movie/details/hooks'
import { DetailInfoControl } from './detailControl'
import { AiOutlineHeart } from 'react-icons/ai';
import { IoIosAddCircleOutline } from 'react-icons/io';
export const MovieDetail = () => {
  const { id } = useParams()

  const isLoading = useIsMovieLoading()
  const isError = useIsMovieError()
  const movieDetail = useMovieDetail()
  const navigate = useNavigate()


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
                        <DetailInfoControl detailName={movieDetail?.original_title  ?? false} tagline={true} infoTitle='Orjinal başlık' />

                          {
                            movieDetail.genres && (
                              <div className='flex items-center gap-3 my-2 flex-wrap'>

                                <h5>Türler;</h5>

                                <div className='flex gap-3 flex-wrap'>
                                  {
                                    movieDetail?.genres && <>
                                      {
                                        movieDetail?.genres?.map((item, idx) => (
                                          <span
                                            className='cursor-pointer hover:text-red-500 '
                                            onClick={() => navigate(`/moviesByGenre/${item.id}`, { state: item.name })}
                                            key={idx}>{item.name}{idx === movieDetail.genres.length - 1 ? '.' : ','} </span>
                                        ))
                                      }
                                    </>
                                  }
                                </div>
                              </div>
                            )
                          }


                          <DetailInfoControl detailName={movieDetail?.tagline ?? false} tagline={true} infoTitle='Slogan' />
                          <DetailInfoControl detailName={movieDetail?.overview ?? false} infoTitle='Açıklama' />
                          <DetailInfoControl detailName={movieDetail?.release_date ?? false} infoTitle='Yayın Tarihi' />
                          <DetailInfoControl detailName={movieDetail?.original_language ?? false} infoTitle='Yayın dili' />
                          <DetailInfoControl detailName={movieDetail?.budget ?? false} infoTitle='Bütçe' />
                          <div className='flex items-center gap-4 '>
                            <AiOutlineHeart className='cursor-pointer' size={25} />
                            <IoIosAddCircleOutline className='cursor-pointer' size={25} />
                          </div>


                        </div>


                      </div>
                    </div>

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



/*



*/