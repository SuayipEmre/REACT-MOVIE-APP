import React from 'react'
import { MatchesFound } from '~/components/search/matchesFound'
import { Movies } from '~/components/moviesByGeneralSearch'
import { NoMatchesWarning } from '~/components/search/noMatches'
import { Title } from '~/components/title'
import { useMoviesIsError, useSearchMovies } from '~/redux/features/movie/search/hooks'
import { Search } from '~/components/search/filterSearch'
import { filterMovies } from '~/helpers/filterMovies'

export const MoviesContent = ({ title }) => {
  const headTitle = `${title} aramanızla eşleşen sonuçlar`
  const isMoviesError = useMoviesIsError()
  const isMoviesLoading = useMoviesIsError()
  const searchMovies = useSearchMovies()

  const filteredMovies = filterMovies(searchMovies)

  return (
    <div>
      <Title title={headTitle} />
      <>
      <Search title='Eşleşen sonuçlar içerisinde ara' />
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
                      <Movies key={idx} movie={movie} />
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
