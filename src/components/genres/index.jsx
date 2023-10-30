import React, { useEffect } from 'react'
import { fetchGenre } from '~/redux/features/movie/genre/actions'
import { useGenres, useIsGenreError, useIsGenresLoading } from '~/redux/features/movie/genre/hooks'
import { GenreItems } from './genreItem'
import { Popover } from '@headlessui/react'
import { Loading } from '../loading'
import { Error } from '../error'

export const GenreList = () => {

  const genres = useGenres()
  const isGenresLoading = useIsGenresLoading()
  const isGenresError = useIsGenreError()





  useEffect(() => {
    fetchGenre()
  }, [])

  return (
    <div className=''>


    {
      isGenresError ? <Error /> : (
        <>
         {
      isGenresLoading ? 
      (
      <>
         <Loading />
      </>
      ) 
       : (
        <>
           <div className='block '>
        <Popover className='w-[100%] '>
          <Popover.Button className='border outline-none p-2'>Türler : </Popover.Button>

          <Popover.Panel className='border bg-slate-400 grid grid-cols-6 w-[100%]'>
            {
              genres.map((genre, idx) => (
                <GenreItems genre={genre} key={idx} />
              ))
            }
          </Popover.Panel>

        </Popover>
      </div>

     
        </>
       )
     }
        </>
      )
    }

    

    </div>
  )
}


