import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { setSearchTitle } from '~/redux/features/search/actions';
import { useSearchTitle } from '~/redux/features/search/hooks';

export const Search = () => {
    const searchTitle = useSearchTitle()
  return (
    <div>
        <div className="group">
                
                <input 
                type="text"
                onChange={(e) => setSearchTitle(e.target.value)}
               value={searchTitle}
                className="bg-transparent text-white  opacity-0 group-hover:opacity-100 transition-opacity border-b duration-1000 border-red-700 focus:outline-none
                             w-24 lg:w-44" />
                <button className="-ml-4 group-hover:m-0 transition-margin group-hover:text-red-700 duration-1000">
                    <AiOutlineSearch className='text-white' size={25} />
                </button>
            </div>
    </div>
  )
}
