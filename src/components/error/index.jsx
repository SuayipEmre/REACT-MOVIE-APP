import React from 'react'
import { BiError } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
export const Error = () => {
  const navigate = useNavigate()
  return (
    <div className=''>
      <div className='mb-12'>Error !</div>
      <div className='flex flex-col  items-center md:flex-row  gap-8'>
        <p className='text-sm opacity-75 '>Üzgünüz bir hata ile karşılaştık.  <span onClick={() => navigate('/')} className='cursor-pointer border-b py-2 border-opacity-50 border-red-400 text-red-500'>Lütfen Tekrar Deneyiniz </span> </p>

        <div className='text-center'>
          <BiError className='text-red-700' size={25} />
        </div>
      </div>
    </div>
  )
}
