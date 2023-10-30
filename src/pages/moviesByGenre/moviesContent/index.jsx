import React from 'react'
import { Link } from 'react-router-dom';
import { MoviesByGenreItems } from '~/components/moviesByGenreItems';
import { useMoviesByGenre } from '~/redux/features/movie/genre/hooks'

export const MoviesContent = ({genreTitle}) => {
    const movies = useMoviesByGenre()

  return (
    <div>

    <div className='flex items-center'>
        <h3 className='mx-4 my-6 text-start font-semibold tracking-wider'>Türü {genreTitle}  olan Filmler </h3> 
        <Link className='text-red-700' to={(-1)} > önceki Sayfaya Dön</Link>
    </div>     

        <div className='grid grid-cols-12 gap-6'>
        {
            movies.map((movie, idx) => (
                <MoviesByGenreItems key={idx} movie={movie} />
            ))
        }
            </div>
    </div>
  )
}
