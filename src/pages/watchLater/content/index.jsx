import React from 'react'
import { MovieCart } from '~/components/movieCart';
import { MatchesFound } from '~/components/search/matchesFound';
import { NoMatchesWarning } from '~/components/search/noMatches';
import { filterMovies } from '~/helpers/filterMovies';
import { useWatchLaterMovies } from '~/redux/features/movie/watchLater/hooks';

export const WatchLaterMoviesContent = () => {
  const movie = useWatchLaterMovies()
  console.log(movie);
  const filteredMovies = filterMovies(movie)

  return (
    <div className='mt-12'>
      <div className='grid grid-cols-12 gap-4'>

        <div className='col-span-12'>
          {
            filteredMovies.length == 0 ? <NoMatchesWarning /> : (
              <>
                <MatchesFound movie={filteredMovies} />
              </>
            )
          }
        </div>
        {
          filteredMovies.map((item, idx) => (
            <MovieCart watchLaterInfo={true} movie={item} key={idx} />
          ))
        }
      </div>
    </div>
  )
}
