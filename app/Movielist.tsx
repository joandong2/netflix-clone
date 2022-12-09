import React from "react";
import { Movie, Movies } from "../typing";
import Rows from "./Rows";

async function getMovieLists() {
  const [popularResults, trendingResults] = await Promise.all([
    fetch(
      `${process.env.BASE_URL}/movie/popular?api_key=${process.env.IMDB_API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `${process.env.BASE_URL}/trending/all/day?api_key=${process.env.IMDB_API_KEY}&language=en-US&page=1`
    ),
  ]);
  const [popular, trending] = await Promise.all([
    popularResults.json(),
    trendingResults.json(),
  ]);

  return {
    popular: popular.results,
    trending: trending.results,
  };
}

const Movielist = async () => {
  const { popular, trending }: { popular: Movie[]; trending: Movie[] } =
    await getMovieLists();

  return (
    <>
      <Rows trending={trending} popular={popular} />
    </>
  );
};

export default Movielist;
