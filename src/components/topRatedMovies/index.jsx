import React from 'react'
import { useIsTopRatedMoviesError, useIsTopRatedMoviesLoading, useTopRatedMovies } from '~/redux/features/movie/topRated/hooks'
import { TopRatedItem } from './topRatedItems';
import { Error } from '../error';
import { Loading } from '../loading';
import { Title } from '../title';

export const TopRatedMovies = () => {


  const isTopRatedMoviesLoading = useIsTopRatedMoviesLoading()
  const isTopRatedMoviesError = useIsTopRatedMoviesError()
    const topRatedMovies = useTopRatedMovies()
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
                <div className='grid grid-cols-12 gap-6'>
                {
                    topRatedMovies.map((movie, idx) =>(
                      <TopRatedItem  movie={movie} key={idx}/>
                    ))
                  }
                </div>
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
