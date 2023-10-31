import classNames from 'classnames';
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { useModal } from '~/redux/features/modal/hooks';
import { setSearchTitle } from '~/redux/features/search/actions';
import { useSearchTitle } from '~/redux/features/search/hooks';

export const Search = () => {
  const searchTitle = useSearchTitle()
  const modal = useModal()
  return (
    <div className='flex items-center w-full top-20b inset-x-0 border-b border-white/10 md:border-0   justify-center absolute  md:static'>
      <div className="group  ">



        <div className='relative'>
          <input
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
            type="text" className={classNames('bg-transparent border-b border-red-500 outline-none  py-1 shadow-sm shadow-white/40  cursor-pointer duration-500 w-44 lg:w-80 placeholder:text-center px-8',{
              "hidden md:block" : modal
            })} placeholder='Film ara' />
          <AiOutlineSearch className={classNames('absolute bottom-1 left-1', {
             "hidden md:block" : modal
          })} size={23} />
        </div>


      </div>
    </div>
  )
}


