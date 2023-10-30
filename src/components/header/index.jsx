import React from 'react'
import { GenreList } from '../genres'
import { Link } from 'react-router-dom'


export const Header = () => {
  return (
    <div className='border-b  flex justify-between p-4 '>
      <Link to={'/'} >
      <h3 className='text-red-600'>MovieApp</h3>
      </Link>
        
      <GenreList />

        
    </div>
  )
}
