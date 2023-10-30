import React from 'react'
import { useIsNowPlayingMoviesError, useIsNowPlayingMoviesLoading, useNowPlayingMovies } from '~/redux/features/movie/nowPlaying/hooks'
import { Error } from '../error'
import { Loading } from '../loading'
import { NowPlayingItem } from './nowPlayingItem'

export const NowPlaying = () => {
    const nowPlayingMovies = useNowPlayingMovies()

    const isNowPlayingMoviesLoading = useIsNowPlayingMoviesLoading()
    const isNowPlayingMoviesError = useIsNowPlayingMoviesError()

    return (
    <div className='mt-24'>
        <h3 className=' mx-4 mb-6 text-start font-semibold tracking-wider'>Şu anda Gösterimde olan filmler </h3>
        {
            isNowPlayingMoviesError ? <Error /> : 
            (
                <>
                    {
                        isNowPlayingMoviesLoading ? <Loading /> : 
                        (
                            <div className='grid grid-cols-12 gap-6'>

                                {
                                    nowPlayingMovies.map((item, idx) => (
                                        <NowPlayingItem movie={item} key={idx} />
                                    ))
                                }
                            </div>
                        )
                    }
                </>
            )
        }
    </div>
  )
}
