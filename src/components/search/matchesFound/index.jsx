import React from 'react'
import { useFilterSearchTitle } from '~/redux/features/filterSearch/hooks'


export const MatchesFound = ({ movie }) => {

  const filterSearchValue = useFilterSearchTitle()
  return (
    <>
      {
        filterSearchValue  && <p className='text-green-500 mb-4 text-center'> {movie.length} tane eşleşen  sonuç bulundu</p>
      }
    </>
  )
}
