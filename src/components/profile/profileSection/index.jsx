import React from 'react'
import profileSectionItems from '../constants';
import { SectionItem } from './item';
import { AiFillCloseSquare } from 'react-icons/ai';
import { setProfileModal } from '~/redux/features/modal/profile/actions';
export const ProfileSection = () => {
  return (
    <div className='bg-black h-48 w-64 md:w-80  z-10 absolute top-0 md:top10 -right-4 flex flex-col gap-8  px-4'>

      <header className='flex items-center justify-between border-b border-white/30 pb-2'>
        <div>Profilim</div>
        <AiFillCloseSquare onClick={() => setProfileModal(false)} size={25} className='cursor-pointer' />
      </header>

      {
        profileSectionItems.map((item, idx) => (
          <SectionItem key={idx} item={item} />
        ))
      }

    </div>
  )
}
<div class="lds-ring">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>