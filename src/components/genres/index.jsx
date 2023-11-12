import React, { useEffect } from 'react'
import { fetchGenre } from '~/redux/features/movie/genre/actions'
import { useGenres, useIsGenreError, useIsGenresLoading } from '~/redux/features/movie/genre/hooks'
import { GenreItems } from './genreItem'
import { Loading } from '../loading'
import { Error } from '../error'
import { useGenreModal } from '~/redux/features/modal/genres/hooks'
import { AiFillCloseSquare } from 'react-icons/ai';

export const GenreList = () => {

  const genres = useGenres()
  const isGenresLoading = useIsGenresLoading()
  const isGenresError = useIsGenreError()

  const modal = useGenreModal()




  useEffect(() => {
    fetchGenre()
  }, [])

  return (
    <div className='flex w-full   gap-4'>
      {
        modal && (
          <div className='w-full   flex-wrap gap-4 rounded-lg     grid grid-cols-2 '>
            {
              isGenresError ? <Error /> : (
                <>
                  {
                    isGenresLoading ? <Loading /> :
                      (
                        <>
                          <div className='col-span-2   flex  items-center  justify-between mt-2 border-b border-white/30 pb-2'>
                            <div>Türler</div>
                            <AiFillCloseSquare size={25} className='cursor-pointer' />
                          </div>
                          
                          {
                            genres.map((genre, idx) => (
                              <GenreItems genre={genre} key={idx} />
                            ))
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



    </div>
  )
}


