"use client";
import { useEffect, useState } from "react";
import { Movie, Movies } from "../typing";
import Image from "next/image";

interface Props {
  trending: Movie[];
}

const Banner = ({ trending }: Props) => {
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    setMovie(trending[Math.floor(Math.random() * trending.length)]);
  }, [trending]);

  console.log("movie", trending[1]);

  return (
    <>
      <div className="absolute top-0 left-0 h-screen z-[-1] w-full bg-center bg-cover px-9">
        {movie ? (
          <>
            <Image
              src={`https://image.tmdb.org/t/p/original${
                movie?.backdrop_path || movie?.poster_path
              }`}
              layout="fill"
              alt="banner"
            />
            <div className="z-10 relative align-center flex flex-col justify-center h-screen px-2">
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Banner;
