import React from 'react'
import { MovieCard } from '~/components/movieCart'
import { MatchesFound } from '~/components/search/matchesFound'
import { NoMatchesWarning } from '~/components/search/noMatches'
import { filterMovies } from '~/helpers/filterMovies'
import { useLikedMovies } from '~/redux/features/movie/likedMovies/hooks'

export const LikedMoviesContent = () => {
  const likedMovies = useLikedMovies()
  const filteredMovies = filterMovies(likedMovies)
  return (
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
        filteredMovies.map((movie, idx) => (
          <MovieCard movie={movie} key={idx} />
        ))
      }
    </div>
  )
}
