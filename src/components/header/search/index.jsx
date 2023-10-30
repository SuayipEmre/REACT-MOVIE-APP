import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { setSearchTitle } from '~/redux/features/search/actions';
import { useSearchTitle } from '~/redux/features/search/hooks';

export const Search = () => {
  const searchTitle = useSearchTitle()
  return (
    <div className='flex items-center w-full top-20 inset-x-0 border-b border-white/10 md:border-0 pb-3  justify-center absolute  md:static'>
      <div className="group  ">



        <div className='relative'>
          <input
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
            type="text" className='bg-transparent border-b border-red-500 outline-none  py-1 shadow-sm shadow-white/40  cursor-pointer duration-500 w-44 lg:w-80 placeholder:text-center px-8' placeholder='Film ara' />
          <AiOutlineSearch className='absolute bottom-1 left-1' size={23} />
        </div>


      </div>
    </div>
  )
}


