import React from 'react'
import { MovieCart } from '~/components/movieCart'

export const UpComingItem = ({movie}) => {
  return (
    <MovieCart movie={movie} />
  )
}
