import React from 'react'
import { usePopularMovies } from '~/redux/features/movie/popular/hooks';
import { MovieItem } from './movieItems';
import { Title } from '../title';
import { useSearchTitle } from '~/redux/features/search/hooks';
import { NoMatchesWarning } from '../noMatches';

export const PopularMovies = () => {

  const popularMovies = usePopularMovies()
  const searchTitle = useSearchTitle()

  let filteredMovies = []
  filteredMovies = popularMovies

  if(searchTitle){
    filteredMovies = popularMovies.filter(item => item.title.toLowerCase().includes(searchTitle.toLowerCase()))
  }
  

  return (
    <div className='mt-24'>

    <Title  title={'Son dönemde popüler '}/>



    <>
    {
        filteredMovies.length == 0 ? <NoMatchesWarning /> : (
          <>
          <div className='grid grid-cols-12 gap-6'>

     

{
    filteredMovies.map((movie, idx) =>(
      <MovieItem  movie={movie} key={idx}/>
    ))
  }
</div>

          </>
        )
    }
    </>

    
    </div>
  )
}
