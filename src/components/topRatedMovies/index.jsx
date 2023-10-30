import React from 'react'
import { useTopRatedMovies } from '~/redux/features/movie/topRated/hooks'
import { TopRatedItem } from './topRatedItems';

export const TopRatedMovies = () => {


    const topRatedMovies = useTopRatedMovies()
  return (
    <div>
        <h3 className=' mx-4 mb-6 text-start font-semibold tracking-wider'>En Yüksek Puanlı filmler</h3>

    <div className='grid grid-cols-12 gap-6'>
    {
        topRatedMovies.map((movie, idx) =>(
          <TopRatedItem  movie={movie} key={idx}/>
        ))
      }
    </div>
    </div>
  )
}
