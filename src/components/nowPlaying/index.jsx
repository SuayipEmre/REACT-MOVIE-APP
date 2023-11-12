import React from "react";
import {
  useIsNowPlayingMoviesError,
  useIsNowPlayingMoviesLoading,
  useNowPlayingMovies,
} from "~/redux/features/movie/nowPlaying/hooks";
import { Error } from "../error";
import { Loading } from "../loading";
import { NowPlayingItem } from "./nowPlayingItem";
import { Title } from "../title";
import { NoMatchesWarning } from "../search/noMatches";
import { filterMovies } from "~/helpers/filterMovies";
import { MatchesFound } from "../search/matchesFound";

export const NowPlaying = () => {
  const nowPlayingMovies = useNowPlayingMovies();

  const isNowPlayingMoviesLoading = useIsNowPlayingMoviesLoading();
  const isNowPlayingMoviesError = useIsNowPlayingMoviesError();

  const filteredMovies = filterMovies(nowPlayingMovies);

  return (
    <div className="mt-24">
      <Title title={"Şu anda Gösterimde olan filmler "} />

      {isNowPlayingMoviesError ? (
        <Error />
      ) : (
        <>
          {
            isNowPlayingMoviesLoading ? (
              <div className='flex items-center justify-center'>

                <Loading />
              </div>
            ) : (
              <>
                {
                  filteredMovies.length == 0 ? (
                    <NoMatchesWarning />
                  ) : (
                    <>
                      {
                        <MatchesFound movie={filteredMovies} />
                      }
                      <div className="grid grid-cols-12 gap-6">
                        {
                          filteredMovies.map((item, idx) => (
                            <NowPlayingItem movie={item} key={idx} />
                          ))
                        }
                      </div>
                    </>
                  )}
              </>
            )}
        </>
      )}
    </div>
  )
}
