import React from "react";
import {
  useIsUpComingMoviesError,
  useIsUpComingMoviesLoading,
  useUpComingMovies,
} from "~/redux/features/movie/upComing/hooks";
import { Loading } from "../loading";
import { UpComingItem } from "./upComingItems";
import { Title } from "../title";
import { NoMatchesWarning } from "../noMatches";
import { filterMovies } from "~/helpers/filterMovies";

export const UpComing = () => {
  const upComingMovies = useUpComingMovies();
  const isUpComingMoviesLoading = useIsUpComingMoviesLoading();
  const isUpComingMoviesError = useIsUpComingMoviesError();


  const filteredMovies = filterMovies(upComingMovies)
 
  return (
    <div className="mt-24">

      <Title  title={'Gösterim tarihi yaklaşan filmler'}/>

      {isUpComingMoviesError ? (
        <Error />
      ) : (
        <>
          {isUpComingMoviesLoading ? (
            <Loading />
          ) : (
            <>
              {
                filteredMovies.length == 0 ? <NoMatchesWarning /> : 
                (
                  <div className="grid grid-cols-12 gap-6">
              
              {filteredMovies.map((item, idx) => (
                <UpComingItem movie={item} key={idx} />
              ))}
            </div>
                )
              }
            </>
          )}
        </>
      )}
    </div>
  );
};
