import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '~/components/header'

export const MainLayout = () => {
  return (
    <div className='bg-black text-white min-h-screen'>
      <Header />
      
        <Outlet />
    </div>
  )
}
