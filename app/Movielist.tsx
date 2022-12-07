import React from "react";
import { Movie, Movies } from "../typing";
import Image from "next/image";

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
      <div>
        <h2 className="font-bold text-red-600">Popular</h2>
        {popular?.map((movie) => (
          <div key={movie.id}>
            {/* @ts-ignore */}
            <Image
              src={`https://image.tmdb.org/t/p/original${
                movie?.backdrop_path || movie?.poster_path
              }`}
              alt="banner"
              width="200"
              height="200"
            />
            {movie.original_title}
          </div>
        ))}
      </div>
    </>
  );
};

export default Movielist;
