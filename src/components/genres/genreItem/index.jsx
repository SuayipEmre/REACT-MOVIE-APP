import React from 'react'
import { useNavigate } from 'react-router-dom'
import { setSearchTitle } from '~/redux/features/search/actions'

export const GenreItems = ({genre}) => {

  const navigate = useNavigate()

  const handleClick  =  () => {
    setSearchTitle('')
   navigate(`/moviesByGenre/${genre.id}`,{ state: genre.name })
  }
  return (
    <div className='col-span-2   cursor-pointer hover:text-red-500 duration-500 '>
       <span onClick={handleClick}>
       {
            genre.name
        }
       </span>
    </div>
  )
}
