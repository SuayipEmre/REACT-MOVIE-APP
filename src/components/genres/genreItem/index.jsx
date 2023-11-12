import React from 'react'
import { useNavigate } from 'react-router-dom'
import { setFilterSearchTitle } from '~/redux/features/filterSearch/actions'
import { setGenreModal } from '~/redux/features/modal/genres/actions'


export const GenreItems = ({genre}) => {

  const navigate = useNavigate()


  const handleClick  =  async() => {
    setFilterSearchTitle('')
    navigate(`/moviesByGenre/${genre.id}`,{ state: genre.name })
    setGenreModal(false)
  }
  return (
    <div className='col-span-1 text-start  cursor-pointer hover:text-red-500 duration-500 '>
       <span onClick={handleClick}>
       {
            genre.name
        }
       </span>
    </div>
  )
}
