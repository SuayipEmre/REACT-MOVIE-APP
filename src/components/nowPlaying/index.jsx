import React from "react";
import {
  useIsNowPlayingMoviesError,
  useIsNowPlayingMoviesLoading,
  useNowPlayingMovies,
} from "~/redux/features/movie/nowPlaying/hooks";
import { Error } from "../error";
import { Loading } from "../loading";
import { Title } from "../title";
import { NoMatchesWarning } from "../search/noMatches";
import { filterMovies } from "~/helpers/filterMovies";
import { MatchesFound } from "../search/matchesFound";
import { MovieCard } from "../movieCart";

export const NowPlaying = () => {
  const nowPlayingMovies = useNowPlayingMovies();

  const isNowPlayingMoviesLoading = useIsNowPlayingMoviesLoading();
  const isNowPlayingMoviesError = useIsNowPlayingMoviesError();

  const filteredMovies = filterMovies(nowPlayingMovies);


  const renderItems = () => {
    if (isNowPlayingMoviesError) return <Error />
    else if (isNowPlayingMoviesLoading) return (
      <div className='flex items-center justify-center'>
        <Loading />
      </div>
    )

    return (
      <>
        {
          filteredMovies.length == 0 ? (
            <NoMatchesWarning />
          ) :
            <>
              {
                <MatchesFound movie={filteredMovies} />
              }
              <div className="grid grid-cols-12 gap-6">
                {
                  filteredMovies.map((item, idx) => (
                    <MovieCard movie={item} key={idx} />
                  ))
                }
              </div>
            </>
        }
      </>
    )
  }

  return (
    <div className="mt-24">
      <Title title={"Şu anda Gösterimde olan filmler "} />
      {
        renderItems()
      }
    </div>
  )
}
