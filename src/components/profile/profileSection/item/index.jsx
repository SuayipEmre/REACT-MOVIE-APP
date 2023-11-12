import React from 'react'

export const SectionItem = ({item}) => {
  console.log(item);
  return (
   
      <div className='flex cursor-pointer  items-center gap-2'>
       <p className='flex-1 truncate'>{item.title}</p>
         <span>{item.icon}</span>
      </div>
  )
}
