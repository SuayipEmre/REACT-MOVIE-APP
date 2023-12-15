import classNames from 'classnames';
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { useGenreModal } from '~/redux/features/modal/genres/hooks';
import { setFilterSearchTitle } from '~/redux/features/filterSearch/actions';
import { useFilterSearchTitle } from '~/redux/features/filterSearch/hooks';

export const Search = ({title}) => {
  const searchTitle = useFilterSearchTitle()
  const modal = useGenreModal()

  return (
    <div className='flex items-center justify-center '>
    

        <div className='relative mb-4'>
          <input
            value={searchTitle}
            onChange={(e) => setFilterSearchTitle(e.target.value)}
            type="text"
            className={classNames('bg-transparent border border-t-0 border-white/50 outline-none  py-1 shadow-sm shadow-white/40 px-8 cursor-pointer duration-500 w-72 lg:w-80 placeholder:text-center ', {
              "hidden md:block": modal
            })}
            placeholder={title}/>

          <AiOutlineSearch className={classNames('absolute bottom-1 left-1', {
            "hidden md:block": modal
          })} size={23} />

        </div>


    </div>
  )
}


