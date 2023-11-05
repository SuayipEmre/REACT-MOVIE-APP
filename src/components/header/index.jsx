import React from 'react'
import { Link } from 'react-router-dom'
import { GeneralSearch } from '../search/generalSearchForm'
import { useModal } from '~/redux/features/modal/hooks'
import { setModal } from '~/redux/features/modal/actions'
import { setFilterSearchTitle } from '~/redux/features/filterSearch/actions'
import { setSearchTitle } from '~/redux/features/movie/search/actions'
import { AiFillUnlock, AiFillLock } from 'react-icons/ai';
export const Header = () => {
  const modal = useModal()

  const handleClick = () => {
    setFilterSearchTitle('')
    setSearchTitle('')
  }
  return (
    <div className='md:border-b flex items-center justify-between md:border-white/10 mb-24  p-4 relative '>

      <div >
        <Link to={'/'}>
          <h3 onClick={handleClick} className='text-red-600 cursor-pointer'>MovieApp</h3>
        </Link>
      </div>

      <div >
        <GeneralSearch />
      </div>

      <div onClick={() => setModal(!modal)} className='cursor-pointer   flex items-center justify-end gap-4'>
        <button className='group-hover:text-red-500 flex gap-2 transition-colors duration-300 ' >
        {
          modal ? <AiFillUnlock size={25} className='text-green-500'/>  : <AiFillLock size={25} className='text-red-500'/> 
        } Türler
        </button>
      </div>


    </div>
  )
}
