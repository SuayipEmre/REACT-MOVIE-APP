import React from 'react'
import { Link } from 'react-router-dom';
import { Error } from '~/components/error';
import { Loading } from '~/components/loading';
import { MoviesByGenreItems } from '~/components/moviesByGenreItems';
import { NoMatchesWarning } from '~/components/noMatches';
import { filterMovies } from '~/helpers/filterMovies';
import { useIsMoviesError, useIsMoviesLoading, useMoviesByGenre } from '~/redux/features/movie/genre/hooks'
import { useSearchTitle } from '~/redux/features/search/hooks';

export const MoviesContent = ({genreTitle}) => {
    const movies = useMoviesByGenre()

    const isMoviesLoading = useIsMoviesLoading()
    const isMoviesError = useIsMoviesError()



    const filteredMovies = filterMovies(movies)

  return (
    <div>

    <div className='flex items-center'>
        <h3 className='mx-4 my-6 text-start font-semibold tracking-wider'>Türü {genreTitle}  olan Filmler </h3> 
        <Link className='text-red-700' to={(-1)} > önceki Sayfaya Dön</Link>
    </div>     

      {
        isMoviesError ? <Error /> : (
            <>
                {
                    isMoviesLoading ? <Loading /> : 
                    (
                      <>
                      {
                        filteredMovies.length == 0 ? <NoMatchesWarning />
                        : (
                            <div className='grid grid-cols-12 gap-6'>
                            {
                                filteredMovies.map((movie, idx) => (
                                    <MoviesByGenreItems key={idx} movie={movie} />
                                ))
                            }
                            </div>
                        )
                      }
                      </>
                    )
                }
            </>
        )
      }
    </div>
  )
}
