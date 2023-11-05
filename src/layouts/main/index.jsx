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
      className={classNames('bg-inherit w-64 h-screen  transition-opacity duration-500 text-center absolute top-0 z-10 left-0 hidden',{
        "!block" : modal
      })}>
        <GenreList />

      </div>
      <Header />
      
        <Outlet />
    </div>
  )
}


