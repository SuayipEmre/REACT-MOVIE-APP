import React from 'react'
import { useSearchTitle } from '~/redux/features/search/hooks'

export const MatchesFound = ({movie}) => {

    const searchValue = useSearchTitle()
  return (
    <>
         {
                              searchValue &&  <p className='text-green-500 mb-4 text-center'> {movie.length} tane eşleşen  sonuç bulundu</p>
          }
    </>
  )
}
