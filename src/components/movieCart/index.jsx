import classNames from 'classnames'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { setFilterSearchTitle } from '~/redux/features/filterSearch/actions'
import { setGenreModal } from '~/redux/features/modal/genres/actions'
import { setProfileModal } from '~/redux/features/modal/profile/actions'


export const MovieCard = ({ movie}) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/detail/${movie.id}`)
        setFilterSearchTitle('')
        setGenreModal(false)
        setProfileModal(false)
    }

    return (
        <div
           
           className=' col-span-12  sm:col-span-6 lg:col-span-4  relative cursor-pointer  '>

           <h3 className='absolute top-0 inset-x-8 bg-black/20 rounded-sm text-center  '>
               {
                   movie.title
               }


           </h3>

           <div  onClick={handleClick}>
               <img src={`${import.meta.env.VITE_API_IMAGE_PATH}${movie.backdrop_path}`} alt="" />
           </div>
           <div className={classNames('absolute right-2   text-black px-2 rounded-full bottom-2', {

               "bg-avgColor-default": Math.round(movie?.vote_average) > 8.5,
               "bg-avgColor-orange": Math.round(movie?.vote_average) < 8.5,
               "bg-avgColor-red": Math.round(movie?.vote_average) < 5,
           })}>
               <p>
                   {
                       Math.round(movie?.vote_average)

                   }
               </p>

           </div>

           

       </div>
      
    )
}
