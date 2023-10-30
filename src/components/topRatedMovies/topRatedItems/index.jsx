import React from 'react'
import { MovieCart } from '~/components/movieCart';

export const TopRatedItem = ({movie}) => {
  return (
    <MovieCart movie={movie} />
  )
}
