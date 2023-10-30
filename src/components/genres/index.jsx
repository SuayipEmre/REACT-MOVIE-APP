import React, { useEffect } from 'react'
import { fetchGenre } from '~/redux/features/movie/genre/actions'
import { useGenres, useIsGenreError, useIsGenresLoading } from '~/redux/features/movie/genre/hooks'
import { GenreItems } from './genreItem'
import { Popover, Transition } from '@headlessui/react'
import { Loading } from '../loading'
import { Error } from '../error'
import { AiOutlineDown } from 'react-icons/ai';
import { AiOutlineUp } from 'react-icons/ai';
export const GenreList = () => {

  const genres = useGenres()
  const isGenresLoading = useIsGenresLoading()
  const isGenresError = useIsGenreError()





  useEffect(() => {
    fetchGenre()
  }, [])

  return (
    <div className='w-1/2  justify-end'>


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
                    <div className=' '>
                      <Popover className='w-[100%]  relative '>
                        {({ open }) => (
                          <>
                            <Popover.Button className=' outline-none flex items-center gap-2 duration-1000    p-2'>
                              <div>Türler</div>
                              <div>
                                {!open ? <AiOutlineDown /> : <><AiOutlineUp /></>}
                              </div>
                            </Popover.Button>

                            <Transition
                              enter="transition duration-1000 ease-out"
                              enterFrom="transform scale-95 duration-1000  opacity-0"
                              enterTo="transform scale-1000 duration-1000  opacity-100"
                              leave="transition duration-75  duration-1000 ease-out"
                              leaveFrom="transform scale-100  duration-1000  opacity-100"
                              leaveTo="transform scale-95 duration-1000  opacity-0"
                            >

                              <Popover.Panel className={` absolute top-70 rounded-lg border border-white/10 bg-black/75  grid grid-cols-8 w-[100%] `}>
                                {
                                  genres.map((genre, idx) => (
                                    <GenreItems genre={genre} key={idx} />
                                  ))
                                }
                              </Popover.Panel>

                            </Transition>

                          </>
                        )}
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
