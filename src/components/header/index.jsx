import React from 'react'
import { GenreList } from '../genres'
import { Link } from 'react-router-dom'
import { Search } from './search'


export const Header = () => {
  return (
    <div className='border-b border-white/10 p-4 '>
  
     <div className=' flex justify-between'>
     <Link to={'/'}   className=''>
          <h3 className='text-red-600'>MovieApp</h3>
      </Link>
      <GenreList />
     </div>
    
      <Search />

        
    </div>
  )
}
