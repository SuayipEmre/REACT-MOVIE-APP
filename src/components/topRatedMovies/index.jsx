import React from 'react'
import { useIsTopRatedMoviesError, useIsTopRatedMoviesLoading, useTopRatedMovies } from '~/redux/features/movie/topRated/hooks'
import { TopRatedItem } from './topRatedItems';
import { Error } from '../error';
import { Loading } from '../loading';
import { Title } from '../title';
import { useSearchTitle } from '~/redux/features/search/hooks';
import { NoMatchesWarning } from '../noMatches';

export const TopRatedMovies = () => {


  const isTopRatedMoviesLoading = useIsTopRatedMoviesLoading()
  const isTopRatedMoviesError = useIsTopRatedMoviesError()
    const topRatedMovies = useTopRatedMovies()


    const searchTitle = useSearchTitle()

    let filteredMovies = []
    filteredMovies = topRatedMovies
  
    if(searchTitle){
      filteredMovies = topRatedMovies.filter(item => item.title.toLowerCase().includes(searchTitle.toLowerCase()))
    }

  return (
    <div className='mt-24'>
        <Title  title={'En Yüksek Puanlı filmler'}/>

    {
      isTopRatedMoviesError ? <Error /> : (
        <>
        {
          isTopRatedMoviesLoading ? <Loading />
          :
          (
            <>
             {
              filteredMovies.length == 0 ? <NoMatchesWarning /> : (
                <>
                 {
                <div className='grid grid-cols-12 gap-6'>
                {
                    filteredMovies.map((movie, idx) =>(
                      <TopRatedItem  movie={movie} key={idx}/>
                    ))
                  }
                </div>
              }</>
              )
             }
            </>
          )
        }
        </>
      )
    }
    </div>
  )
}
