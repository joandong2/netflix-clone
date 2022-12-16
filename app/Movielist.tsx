import React from "react";
import { Movie, Movies } from "../typing";
import Rows from "./Rows";
import NumberRows from "./NumberRows";

// fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
//   fetchNetflixOriginals: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`,
//   fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//   fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
//   fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
//   fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
//   fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
//   fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,

async function getMovieLists() {
  const [popularResults, trendingResults, actionResults, topRatedResults] =
    await Promise.all([
      fetch(
        `${process.env.BASE_URL}/movie/popular?api_key=${process.env.IMDB_API_KEY}&language=en-US&page=1`
      ),
      fetch(
        `${process.env.BASE_URL}/trending/all/day?api_key=${process.env.IMDB_API_KEY}&language=en-US&page=1`
      ),
      fetch(
        `${process.env.BASE_URL}/discover/movie?api_key=${process.env.IMDB_API_KEY}&language=en-US&with_genres=28`
      ),
      fetch(
        `${process.env.BASE_URL}/movie/top_rated?api_key=${process.env.IMDB_API_KEY}&language=en-USpage=1`
      ),
    ]);
  const [popular, trending, action, topRated] = await Promise.all([
    popularResults.json(),
    trendingResults.json(),
    actionResults.json(),
    topRatedResults.json(),
  ]);

  return {
    popular: popular.results,
    trending: trending.results,
    action: action.results,
    topRated: topRated.results,
  };
}

const Movielist = async () => {
  const {
    popular,
    trending,
    action,
    topRated,
  }: {
    popular: Movie[];
    trending: Movie[];
    action: Movie[];
    topRated: Movie[];
  } = await getMovieLists();

  return (
    <>
      <Rows title="Popular on Netflix" movies={popular} />
      <Rows title="Trending Now" movies={trending} />
      <Rows title="Top Rated Movies" movies={topRated} />
      <Rows title="Actions Movies" movies={action} />
    </>
  );
};

export default Movielist;
