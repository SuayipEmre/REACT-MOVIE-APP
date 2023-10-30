import React from 'react'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames';
import { MovieCart } from '~/components/movieCart';

export const MovieItem = ({ movie }) => {


  return (

 
      <MovieCart movie={movie} />
   


  )
}

