import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { IoIosAddCircleOutline } from 'react-icons/io';
import { useIsLater } from '~/redux/features/movie/watchLater/hooks';
import { addWatchLaterMovie, removeWatchLaterMovie, setIsLater} from '~/redux/features/movie/watchLater/actions';
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

export const WatchLater = ({movieDetail}) => {
  const isLater = useIsLater()
  const {id} = useParams()
  
  const laterNotify = (value) => toast(`${value === 'add' ? 'Filmi Sonra Izleye Eklediniz' : "Filmi Sonra Izle'den Kaldırdınız"}`);

  const handleLaterClick = async () => {

    if (isLater) {
      await removeWatchLaterMovie(id)
      setIsLater(false)
      laterNotify('remove')
    }
    else {
      await addWatchLaterMovie({
        id: movieDetail.id,
        title: movieDetail.title,
        backdrop_path: movieDetail.backdrop_path,
        vote_average: movieDetail.vote_average,
      })
      setIsLater(true)
      laterNotify('add')
    }
  }


  return (
    <div className='cursor-pointer ' onClick={handleLaterClick}>
      {
        isLater ? <FaCheck className='text-green-600' size={25} /> : <IoIosAddCircleOutline size={25} />
      }
      <ToastContainer />

    </div>
  )
}
