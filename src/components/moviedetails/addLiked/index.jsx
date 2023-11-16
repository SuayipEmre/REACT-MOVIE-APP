import React from 'react'
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai';
import {  setIsLiked } from '~/redux/features/movie/likedMovies/actions';
import { useIsLiked } from '~/redux/features/movie/likedMovies/hooks';
import { ToastContainer, toast } from 'react-toastify';
import { addLikedMovies, removeLikedMovies } from '~/redux/features/movie/likedMovies/actions';
import { useParams } from 'react-router-dom';

export const AddToLiked = ({ movieDetail }) => {
  const likeNotify = (value) => toast(`${value === 'add' ? 'Filmi Beğenilenlere Eklediniz' : 'Filmi Beğenilenlerden Kaldırdınız'}`);
  const isLiked = useIsLiked()
  const {id} = useParams()

  const handleLikeClick = async () => {



    if (isLiked) {
      await removeLikedMovies(id)
      setIsLiked(false)
      likeNotify('remove')

    } else {
      await addLikedMovies({
        id: movieDetail.id,
        title: movieDetail.title,
        backdrop_path: movieDetail.backdrop_path,
        vote_average: movieDetail.vote_average,
      })
      setIsLiked(true)
      likeNotify('add')
    }

  }


    


  return (
    <div onClick={handleLikeClick} >
      {
        isLiked ? <AiTwotoneHeart size={25} className='cursor-pointer text-red-700' /> : <AiOutlineHeart className='cursor-pointer' size={25} />
      }
      <ToastContainer />
    </div>
  )
}
