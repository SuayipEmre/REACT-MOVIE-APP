import React from 'react'
import { CgProfile } from 'react-icons/cg';
import { useProfileModal } from '~/redux/features/modal/profile/hooks';
import { ProfileSection } from './profileSection';
import { setProfileModal } from '~/redux/features/modal/profile/actions';
import { setGenreModal } from '~/redux/features/modal/genres/actions';

export const Profile = () => {
  const modal = useProfileModal()
  
  const handleModalClick = () => {
     setProfileModal(!modal)  
     setGenreModal(false)
  }
  return (
    <div className='relative  '>
      {
        modal && <ProfileSection />
      }
         <CgProfile onClick={handleModalClick} className='cursor-pointer' size={23} />
    </div>
  )
}
