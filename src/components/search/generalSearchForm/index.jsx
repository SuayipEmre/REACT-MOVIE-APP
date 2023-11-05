import classNames from 'classnames'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useModal } from '~/redux/features/modal/hooks'
import { setSearchTitle } from '~/redux/features/movie/search/actions'
import { useSearchTitle } from '~/redux/features/movie/search/hooks'
import { AiOutlineSearch } from 'react-icons/ai';
export const GeneralSearch = () => {
    const searchTitle = useSearchTitle()

    const navigate = useNavigate()
    const modal = useModal()

    const handleSubmit = async (e) => {
        e.preventDefault()
        navigate(`/moviesBySearch/${searchTitle}`)

    }

    return (
        <div>
            <form
                onSubmit={e => handleSubmit(e)}
                className={classNames('flex items-center justify-center relative', {

                })} >
               
                <input
                    value={searchTitle}
                    onChange={(e) => setSearchTitle(e.target.value)}
                    type="text"
                    className={classNames('bg-transparent border-b border-red-500 outline-none  py-1 shadow-sm shadow-white/40 px-8 cursor-pointer duration-500 w-44 lg:w-80 placeholder:text-center ', {
                        "hidden md:block": modal
                    })}
                    placeholder='Film Ara' />

                <AiOutlineSearch className={classNames('absolute bottom-1 left-1', {
                    "hidden md:block": modal
                })} size={23} />

            </form>
        </div>
    )
}
