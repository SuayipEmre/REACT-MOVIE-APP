import React from 'react'

export const Title = ({ title }) => {
    return (
        <h3 className='mx-2 mb-6 text-start hover:text-red-300 duration-1000 shadow-sm font-semibold tracking-wider'>{title}</h3>
    )
}
