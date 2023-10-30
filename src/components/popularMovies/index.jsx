import React from 'react'
import { usePopularMovies } from '~/redux/features/movie/popular/hooks';
import { MovieItem } from './movieItems';
import { Title } from '../title';

export const PopularMovies = () => {

  const popularMovies = usePopularMovies()

  

  return (
    <div className='mt-24'>

    <Title  title={'Son dönemde popüler '}/>

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
