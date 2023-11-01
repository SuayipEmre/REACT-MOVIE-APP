import React from 'react'
import { GenreList } from '../genres'
import { Link } from 'react-router-dom'
import { Search } from './search'
import { setSearchTitle } from '~/redux/features/search/actions'


export const Header = () => {
  return (
    <div className='md:border-b md:border-white/10 mb-24  p-4 relative '>
  
     <div className=' block  md:flex md:justify-between'>
          <Link to={'/'}   className=''>
                <h3 onClick={() =>  setSearchTitle('')} className='text-red-600'>MovieApp</h3>
         </Link>
      <GenreList />
     </div>
    
      <Search />

        
    </div>
  )
}
