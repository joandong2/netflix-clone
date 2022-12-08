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

// height 297
// width 164

// originals
// height
// width

const Movielist = async () => {
  const { popular, trending }: { popular: Movie[]; trending: Movie[] } =
    await getMovieLists();

  return (
    <>
      <h2 className="text-[32px] font-bold text-red-600">Popular</h2>
      <div>
        {trending?.map((movie) => (
          <div key={movie.id}>
            {/* @ts-ignore */}
            <Image
              src={`https://image.tmdb.org/t/p/original${
                movie?.backdrop_path || movie?.poster_path
              }`}
              alt="image-banner"
              width="300"
              height="165"
            />
            <h2>{movie.original_title}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default Movielist;
