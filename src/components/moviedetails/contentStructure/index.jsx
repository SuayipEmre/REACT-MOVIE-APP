import React from 'react'
import classNames from 'classnames';
import { DetailInfoControl } from '../detailControl'
import { useMovieDetail } from '~/redux/features/movie/details/hooks';
import { useNavigate } from 'react-router-dom';
import { WatchLater } from '../watchLater';
import { AddToLiked } from '../addLiked';
import 'react-toastify/dist/ReactToastify.css';


export const DetailContent = () => {
  const navigate = useNavigate()
  const movieDetail = useMovieDetail()







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

              :

              <div className='absolute right-2  bg-slate-300 text-black px-2 rounded-full bottom-2'>
                <p>
                  0
                </p>
              </div>


          }
        </>
      </div>

      <div className='col-span-4 lg:col-span-2  '>


        <div className='grid grid-cols-1 gap-3 md:gap-6'>
          <DetailInfoControl detailName={movieDetail?.original_title ?? false} tagline={true} infoTitle='Orjinal başlık' />

          {
            movieDetail.genres && 
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
            
          }


          <DetailInfoControl detailName={movieDetail?.tagline ?? false} tagline={true} infoTitle='Slogan' />
          <DetailInfoControl detailName={movieDetail?.overview ?? false} infoTitle='Açıklama' />
          <DetailInfoControl detailName={movieDetail?.release_date ?? false} infoTitle='Yayın Tarihi' />
          <DetailInfoControl detailName={movieDetail?.original_language ?? false} infoTitle='Yayın dili' />
          <DetailInfoControl detailName={movieDetail?.budget ?? false} infoTitle='Bütçe' />


          <div className='flex items-center gap-4 '>
            <AddToLiked movieDetail={movieDetail} />
            <WatchLater movieDetail={movieDetail} />

          </div>


        </div>


        <div>

        </div>

      </div>
    </div>

  )
}
