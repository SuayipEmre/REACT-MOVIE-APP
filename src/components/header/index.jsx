import React from 'react'
import { GenreList } from '../genres'
import { Link } from 'react-router-dom'
import { Search } from './search'


export const Header = () => {
  return (
    <div className='md:border-b md:border-white/10 mb-24  p-4 relative '>
  
     <div className=' block  md:flex md:justify-between'>
          <Link to={'/'}   className=''>
                <h3 className='text-red-600'>MovieApp</h3>
         </Link>
      <GenreList />
     </div>
    
      <Search />

        
    </div>
  )
}
