import React from 'react'
import { Link } from 'react-router-dom'
import { GeneralSearch } from '../search/generalSearchForm'
import { useGenreModal } from '~/redux/features/modal/genres/hooks'
import { setGenreModal } from '~/redux/features/modal/genres/actions'
import { setFilterSearchTitle } from '~/redux/features/filterSearch/actions'
import { setSearchTitle } from '~/redux/features/movie/search/actions'
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { Profile } from '../profile'
import { setProfileModal } from '~/redux/features/modal/profile/actions'

export const Header = () => {
  const modal = useGenreModal()

  const handleClick = () => {
    setFilterSearchTitle('')
    setSearchTitle('')
  }
  const handleModalClick = () => {
    setGenreModal(!modal)
    setProfileModal(false)
  }
  return (

    <>
      <div className='flex items-center justify-center py-2 border-b border-red-500/50'>
        <Link to={'/'}>
          <h3 onClick={handleClick} className='text-red-600 cursor-pointer'>MovieApp</h3>
        </Link>
      </div>

      <div className='md:border-b flex justify-between   md:border-white/10 mb-24  p-4 relative '>


        <div onClick={handleModalClick} className='cursor-pointer   flex items-center justify-end gap-4'>
          <button className='group-hover:text-red-500 flex gap-2 transition-colors duration-300  items-center justify-center' >
            <AiOutlineUnorderedList size={20} />
            Türler
          </button>
        </div>



        <div className='flex items-center   gap-4 '>
          <GeneralSearch />
          <Profile />
        </div>



      </div>
    </>
  )
}
