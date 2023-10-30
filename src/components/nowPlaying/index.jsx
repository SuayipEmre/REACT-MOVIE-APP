import React from 'react'
import { useIsNowPlayingMoviesError, useIsNowPlayingMoviesLoading, useNowPlayingMovies } from '~/redux/features/movie/nowPlaying/hooks'
import { Error } from '../error'
import { Loading } from '../loading'
import { NowPlayingItem } from './nowPlayingItem'
import { Title } from '../title'
import { useSearchTitle } from '~/redux/features/search/hooks'
import { NoMatchesWarning } from '../noMatches'

export const NowPlaying = () => {
    const nowPlayingMovies = useNowPlayingMovies()

    const isNowPlayingMoviesLoading = useIsNowPlayingMoviesLoading()
    const isNowPlayingMoviesError = useIsNowPlayingMoviesError()


    const searchTitle = useSearchTitle()

    let filteredMovies = []
    filteredMovies = nowPlayingMovies
  
    if(searchTitle){
      filteredMovies = nowPlayingMovies.filter(item => item.title.toLowerCase().includes(searchTitle.toLowerCase()))
    }


    return (
    <div className='mt-24'>
        <Title  title={'Şu anda Gösterimde olan filmler '}/>
        
        {
            isNowPlayingMoviesError ? <Error /> : 
            (
                <>
                    {
                        isNowPlayingMoviesLoading ? <Loading /> : 
                        (
                            <>
                                {
                                    filteredMovies.length == 0 ? <NoMatchesWarning /> : 
                                    (
                                        <div className='grid grid-cols-12 gap-6'>

                                        {
                                            filteredMovies.map((item, idx) => (
                                                <NowPlayingItem movie={item} key={idx} />
                                            ))
                                        }
                                    </div>
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
