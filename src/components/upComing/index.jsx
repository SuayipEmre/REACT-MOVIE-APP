import React from "react";
import {
  useIsUpComingMoviesError,
  useIsUpComingMoviesLoading,
  useUpComingMovies,
} from "~/redux/features/movie/upComing/hooks";
import { Loading } from "../loading";
import { Title } from "../title";
import { NoMatchesWarning } from "../search/noMatches";
import { filterMovies } from "~/helpers/filterMovies";
import { MatchesFound } from "../search/matchesFound";
import { MovieCard } from "../movieCart";

export const UpComing = () => {
  const upComingMovies = useUpComingMovies();
  const isUpComingMoviesLoading = useIsUpComingMoviesLoading();
  const isUpComingMoviesError = useIsUpComingMoviesError();


  const filteredMovies = filterMovies(upComingMovies)


  const renderItems = () => {

    if (isUpComingMoviesError) return <Error />

    else if (isUpComingMoviesLoading) return (
      <div className='flex items-center justify-center'>
        <Loading />
      </div>
    )

    return (
      <>
        {
          filteredMovies.length == 0 ? <NoMatchesWarning /> :

            <>
              {
                <MatchesFound movie={filteredMovies} />
              }
              <div className="grid grid-cols-12 gap-6">

                {filteredMovies.map((item, idx) => (
                  <MovieCard movie={item} key={idx} />
                ))}
              </div>
            </>

        }
      </>
    )
  }



  return (
    <div className="mt-24">
      <Title title={'Gösterim tarihi yaklaşan filmler'} />
      {
        renderItems()
      }
    </div>
  )
}
