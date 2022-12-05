import React from "react";
import { Movies } from "../typing";

async function getMovieLists() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.IMDB_API_KEY}&language=en-US&page=1`
  );
  const movies: Movies = await res.json();
  return movies;
}

const Movielist = async () => {
  const movies = await getMovieLists();
  //console.log("movies", movies);
  return (
    <div>
      {movies.results.map((movie) => (
        <div key={movie.id}>{movie.original_title}</div>
      ))}
    </div>
  );
};

export default Movielist;
