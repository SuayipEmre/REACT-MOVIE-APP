import classNames from 'classnames'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { GenreList } from '~/components/genres'
import { Header } from '~/components/header'
import { setGenreModal } from '~/redux/features/modal/genres/actions'
import { useGenreModal } from '~/redux/features/modal/genres/hooks'

export const MainLayout = () => {
  const modal = useGenreModal()
  return (
    <div className='bg-black relative text-white min-h-screen'>


      <div 
      onClick={() => setGenreModal(!modal)}
      className={classNames('bg-black w-64 pl-4 h-screen md:h-[482px] rounded-lg  text-white/80 transition-opacity duration-500 text-center absolute top-10 md:top-14 z-10 left-0 hidden',{
        "!block" : modal
      })}>
        <GenreList />

      </div>
      <Header />
      
        <Outlet />
    </div>
  )
}


