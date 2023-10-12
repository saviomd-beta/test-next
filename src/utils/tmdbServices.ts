import { IMoviePopular } from "@/types";
import fetchTmdb from "./fetchTmdb";

export const getMoviePopular = async (): Promise<IMoviePopular[]> => {
  const response = await fetchTmdb({
    path: "movie/popular",
  });
  return response.results;
};
