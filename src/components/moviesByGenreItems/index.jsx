import React from 'react'
import { useNavigate } from 'react-router-dom';
import { MovieCart } from '../movieCart';

export const MoviesByGenreItems = ({ movie }) => {

  const navigate = useNavigate()

  return (

    <>
      <MovieCart movie={movie} />

    </>

  )
}
