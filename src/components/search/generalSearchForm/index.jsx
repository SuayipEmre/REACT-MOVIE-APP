import classNames from 'classnames'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useGenreModal } from '~/redux/features/modal/genres/hooks'
import { setSearchTitle } from '~/redux/features/movie/search/actions'
import { useSearchTitle } from '~/redux/features/movie/search/hooks'
import { AiOutlineSearch } from 'react-icons/ai';
export const GeneralSearch = () => {
    const searchTitle = useSearchTitle()

    const navigate = useNavigate()
    const modal = useGenreModal()

    const handleSubmit = async (e) => {
        e.preventDefault()
        navigate(`/moviesBySearch/${searchTitle}`)

    }

    return (
            <form
                onSubmit={e => handleSubmit(e)}
                className={classNames('flex items-center justify-center relative', {

                })} >

              <div className='group cursor-pointer'>

              <input
                    value={searchTitle}
                    onChange={(e) => setSearchTitle(e.target.value)}
                    type="text"
                    className={classNames('bg-transparent border-b opacity-0 group-hover:opacity-100   border-red-500 outline-none transition-opacity   shadow-sm shadow-white/40 px-8 cursor-pointer duration-500 w-44 lg:w-60 placeholder:text-center ', {
                        "hidden md:block": modal 
                    })}
                    placeholder='Film Ara' />

                <AiOutlineSearch className={classNames('absolute group-hover:opacity-70 transition-opacity duration-500 bottom-0 right-1', {
                    "hidden md:block": modal
                })} size={23} />

              </div>

               

            </form>
    )
}
