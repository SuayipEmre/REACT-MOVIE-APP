import { AiFillHeart } from 'react-icons/ai';
import { MdWatchLater } from 'react-icons/md';

const profileSectionItems = [
    {
        title : 'Beğendiklerim',
        icon : <AiFillHeart className='text-red-500' size={23}/>
    },
    {
        title : 'Sonra İzleye Kaydettiklerim',
        icon : <MdWatchLater size={23}/>

    }
]
export default profileSectionItems