import React, { useEffect, useState } from 'react'
import classNames from 'classnames';
import { DetailInfoControl } from '../detailControl'
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { useMovieDetail } from '~/redux/features/movie/details/hooks';
import { addLikedMovies, fetchIsLiked, removeLikedMovies } from '~/redux/features/movie/likedMovies/actions';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const DetailContent = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const movieDetail = useMovieDetail()
  const [isLiked, setIsLiked] = useState('')


  const notify = (value) => toast(`${value === 'add' ? 'Filmi Beğenilenlere Eklediniz' : 'Filmi Beğenilenlerden Sildiniz'}`);

  const handleClick = async () => {

    if (isLiked) {
      await removeLikedMovies(id)
      setIsLiked(false)
      notify('remove')
    } else {
      await addLikedMovies(movieDetail)
      setIsLiked(true)
      notify('add')
    }

  }


  const handleFirstLoad = async (id) => {
    const { payload } = await fetchIsLiked(id ?? null)
    setIsLiked(payload == undefined ? false : true)
  }

  useEffect(() => {
    handleFirstLoad(id)
  }, [id])

  return (
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
          <DetailInfoControl detailName={movieDetail?.original_title ?? false} tagline={true} infoTitle='Orjinal başlık' />

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
            <div onClick={handleClick} >
              {
                isLiked ? <AiTwotoneHeart size={25} className='cursor-pointer text-red-700' /> : <AiOutlineHeart className='cursor-pointer' size={25} />
              }
            </div>
            <IoIosAddCircleOutline className='cursor-pointer' size={25} />
          </div>


        </div>


        <div onClick={() => navigate('/profile/myFavoriteMovies')}>
          <ToastContainer />
        </div>

      </div>
    </div>

  )
}
