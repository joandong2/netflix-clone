import React from "react";
import { Genre, Movie, Movies } from "../typing";
import Rows from "./Rows";

async function getMovieLists() {
  const [
    popularResults,
    trendingResults,
    originalsResults,
    actionResults,
    topRatedResults,
    genresResults,
  ] = await Promise.all([
    fetch(
      `${process.env.BASE_URL}/movie/popular?api_key=${process.env.IMDB_API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `${process.env.BASE_URL}/trending/all/day?api_key=${process.env.IMDB_API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `${process.env.BASE_URL}/discover/movie?api_key=${process.env.IMDB_API_KEY}&language=en-US&with_networks=213&include_video=true`
    ),
    fetch(
      `${process.env.BASE_URL}/discover/movie?api_key=${process.env.IMDB_API_KEY}&language=en-US&with_genres=28`
    ),
    fetch(
      `${process.env.BASE_URL}/movie/top_rated?api_key=${process.env.IMDB_API_KEY}&language=en-USpage=1`
    ),
    fetch(
      `${process.env.BASE_URL}/genre/movie/list?api_key=${process.env.IMDB_API_KEY}&language=en-USpage=1`
    ),
  ]);
  const [popular, trending, originals, action, topRated, genres] =
    await Promise.all([
      popularResults.json(),
      trendingResults.json(),
      originalsResults.json(),
      actionResults.json(),
      topRatedResults.json(),
      genresResults.json(),
    ]);

  return {
    popular: popular.results,
    trending: trending.results,
    originals: originals.results,
    action: action.results,
    topRated: topRated.results,
    genres: genres.genres,
  };
}

const Movielist = async () => {
  const {
    popular,
    trending,
    originals,
    action,
    topRated,
    genres,
  }: {
    popular: Movie[];
    trending: Movie[];
    originals: Movie[];
    action: Movie[];
    topRated: Movie[];
    genres: Genre[];
  } = await getMovieLists();

  return (
    <>
      <Rows title="Popular on Netflix" movies={popular} genres={genres} />
      <Rows title="Trending Now" movies={trending} genres={genres} />
      <Rows title="Netflix Originals" movies={originals} genres={genres} />
      <Rows title="Top Rated Movies" movies={topRated} genres={genres} />
      <Rows title="Actions Movies" movies={action} genres={genres} />
      {/* <MoviePopup /> */}
    </>
  );
};

export default Movielist;
