import classNames from 'classnames'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { GenreList } from '~/components/genres'
import { Header } from '~/components/header'
import { setModal } from '~/redux/features/modal/actions'
import { useModal } from '~/redux/features/modal/hooks'

export const MainLayout = () => {
  const modal = useModal()
  return (
    <div className='bg-black relative text-white min-h-screen'>


      <div 
      onClick={() => setModal(!modal)}
      className={classNames('bg-black w-64 pl-4 h-screen md:h-[482px] rounded-lg  text-white/80 transition-opacity duration-500 text-center absolute top-0 z-10 left-0 hidden',{
        "!block" : modal
      })}>
        <GenreList />

      </div>
      <Header />
      
        <Outlet />
    </div>
  )
}


