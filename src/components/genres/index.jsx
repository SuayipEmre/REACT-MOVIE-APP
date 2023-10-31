import React, { useEffect, useState } from 'react'
import { fetchGenre } from '~/redux/features/movie/genre/actions'
import { useGenres, useIsGenreError, useIsGenresLoading } from '~/redux/features/movie/genre/hooks'
import { GenreItems } from './genreItem'
import { Loading } from '../loading'
import { Error } from '../error'
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import { useModal } from '~/redux/features/modal/hooks'
import { setModal } from '~/redux/features/modal/actions'

export const GenreList = () => {

  const genres = useGenres()
  const isGenresLoading = useIsGenresLoading()
  const isGenresError = useIsGenreError()

  const modal = useModal()




  useEffect(() => {
    fetchGenre()
  }, [])

  return (
    <div className=' flex w-full md:w-1/2 relative   gap-4'>
      {
        modal && (
          <div className='w-full md:w-[50%] absolute md:top-0 md:right-20 flex-wrap gap-4 rounded-lg border  border-white/10 bg-black  grid grid-cols-8 '>
            {
              isGenresError ? <Error /> : (
                <>
                  {
                    isGenresLoading ? <Loading /> :
                      (
                        <>
                          {
                            genres.map((genre, idx) => (
                              <GenreItems  genre={genre} key={idx} />
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
      <div onClick={() => setModal(!modal)} className='absolute group bottom-0 right-0   cursor-pointer  flex items-center gap-4'>
        <AiOutlineDoubleLeft className='group-hover:text-red-500 transition-colors duration-300 ' />
        <button className='group-hover:text-red-500 transition-colors duration-300 ' >Türler</button>
      </div>


    </div>
  )
}


