import React from "react";
import {
  useIsUpComingMoviesError,
  useIsUpComingMoviesLoading,
  useUpComingMovies,
} from "~/redux/features/movie/upComing/hooks";
import { Loading } from "../loading";
import { UpComingItem } from "./upComingItems";
import { Title } from "../title";

export const UpComing = () => {
  const upComingMovies = useUpComingMovies();
  const isUpComingMoviesLoading = useIsUpComingMoviesLoading();
  const isUpComingMoviesError = useIsUpComingMoviesError();
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
            <div className="grid grid-cols-12 gap-6">
              
              {upComingMovies.map((item, idx) => (
                <UpComingItem movie={item} key={idx} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};
