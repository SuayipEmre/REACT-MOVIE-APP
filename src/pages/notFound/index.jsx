import React from 'react'
import { useNavigate } from 'react-router-dom'

export const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className='flex items-center justify-center flex-col h-28'>
      <h3 className='font-semibold text-red-500'>Upps!</h3>
      <p className='my-4 font-semibold text-center'>İnterneti çökertmediniz, ancak aradığınızı bulamıyoruz.</p>
      <p className='font-semibold' >Ana sayfaya dönmek için  <span onClick={() => navigate('/')} className='cursor-pointer border-b py-2 border-opacity-50 border-red-400 text-red-500'>Tıklayın  !</span> </p>
    </div>
  )
}
