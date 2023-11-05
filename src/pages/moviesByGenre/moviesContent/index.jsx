import React from 'react'
import { Link } from 'react-router-dom';
import { MatchesFound } from '~/components/search/matchesFound';
import { MoviesByGenreItems } from '~/components/moviesByGenreItems';
import { NoMatchesWarning } from '~/components/search/noMatches';
import { filterMovies } from '~/helpers/filterMovies';
import { useMoviesByGenre } from '~/redux/features/movie/genre/hooks'
import { Search } from '~/components/search/filterSearch';
import { setFilterSearchTitle } from '~/redux/features/filterSearch/actions';
import { setSearchTitle } from '~/redux/features/movie/search/actions';

export const MoviesContent = ({ genreTitle }) => {
  const movies = useMoviesByGenre()


  const filteredMovies = filterMovies(movies)

  const handleClick = () => {
    setFilterSearchTitle('')
    setSearchTitle('')
  }

  return (
    <div>

      <div className='flex items-center justify-between flex-wrap'>
        <div className='flex mx-4 my-6 items-center flex-wrap gap-4'>
          <h3 className=' text-start font-semibold tracking-wider'>Türü {genreTitle}  olan Filmler </h3>
          <Link className='text-red-700' to={(-1)} onClick={handleClick} > önceki Sayfaya Dön</Link>
        </div>

        <div className='mx-4 flex items-center justify-center md:justify-end w-full '>
          <Search title='Ara...' />
        </div>
        
      </div>

      <>
        {
          filteredMovies.length == 0 ? <NoMatchesWarning />
            : (
              <>
                {
                  <>

                    <br /><br />
                    <MatchesFound movie={filteredMovies} />
                  </>
                }

                <div className='grid grid-cols-12 gap-6'>
                  {
                    filteredMovies.map((movie, idx) => (
                      <MoviesByGenreItems key={idx} movie={movie} />
                    ))
                  }
                </div>
              </>
            )
        }
      </>
    </div>
  )
}
