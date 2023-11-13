import React from 'react'
import { useNavigate } from 'react-router-dom';

export const SectionItem = ({item}) => {
  const navigate = useNavigate()

  const handleClick  = () => {
    if(item.title == 'Beğendiklerim'){
      navigate('/profile/myFavoriteMovies')
    }else{
      console.log('feature/watch later will be here ');
    }
  }
  return (
   
      <div
      onClick={handleClick}
      className='flex cursor-pointer  items-center gap-2'>
       <p className='flex-1 truncate'>{item.title}</p>
         <span>{item.icon}</span>
      </div>
  )
}
