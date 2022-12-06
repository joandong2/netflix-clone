"use client";
import { useEffect, useState } from "react";
import { Movie, Movies } from "../typing";
import Image from "next/image";

interface Props {
  trending: Movie[];
}

const Banner = ({ trending }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setMovie(trending[Math.floor(Math.random() * trending.length)]);
  }, [trending]);

  console.log("movie", movie);

  return (
    <div className="absolute top-0 left-0">
      <Image
        src={`https://image.tmdb.org/t/p/original${
          movie?.backdrop_path || movie?.poster_path
        }`}
        layout="fill"
        alt="banner"
      />
    </div>
  );
};

export default Banner;
