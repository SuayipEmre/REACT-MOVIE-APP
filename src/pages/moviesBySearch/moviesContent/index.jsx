import React from 'react'
import { MatchesFound } from '~/components/search/matchesFound'
import { NoMatchesWarning } from '~/components/search/noMatches'
import { Title } from '~/components/title'
import { useSearchMovies } from '~/redux/features/movie/search/hooks'
import { filterMovies } from '~/helpers/filterMovies'
import { MovieCard } from '~/components/movieCart'

export const MoviesContent = ({ title }) => {
  const headTitle = `${title} aramanızla eşleşen sonuçlar`
  const searchMovies = useSearchMovies()

  const filteredMovies = filterMovies(searchMovies)

  const renderItems = () => {
    if (filteredMovies.length == 0) return <NoMatchesWarning />
    return (
      <>

        <br /><br />
        <MatchesFound movie={filteredMovies} />


        <div className='grid grid-cols-12 gap-6'>

          {
            filteredMovies.map((movie, idx) => <MovieCard key={idx} movie={movie} />)
          }
        </div>
      </>
    )
  }
  return (
    <div>
      <Title title={headTitle} />
      {
        renderItems()
      }
    </div>
  )
}
