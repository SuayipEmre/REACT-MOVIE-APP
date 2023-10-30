import React from 'react'
import { usePopularMovies } from '~/redux/features/movie/popular/hooks';
import { MovieItem } from './movieItems';

export const PopularMovies = () => {

  const popularMovies = usePopularMovies()

  

  return (
    <div className='mt-24'>

    <h3 className=' mx-4 mb-6 text-start font-semibold tracking-wider'>Son dönemde popüler </h3>

    <div className='grid grid-cols-12 gap-6'>

    {
        popularMovies.map((movie, idx) =>(
          <MovieItem  movie={movie} key={idx}/>
        ))
      }
    </div>

    </div>
  )
}
