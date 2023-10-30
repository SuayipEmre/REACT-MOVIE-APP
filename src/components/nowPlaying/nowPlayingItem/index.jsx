import React from 'react'
import { MovieCart } from '~/components/movieCart'

export const NowPlayingItem = ({movie}) => {
  return (
    <MovieCart  movie={movie}/>
  )
}
