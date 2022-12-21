"use client";
import { useEffect, useState } from "react";
import { Movie, Movies } from "../typing";
import Image from "next/image";
import { AiFillPlayCircle, AiFillInfoCircle } from "react-icons/ai";

// interface Props {
//   trending: Movie[];
// }

const Banner = ({ trending }: { trending: Movie[] }) => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setMovie(trending[Math.floor(Math.random() * 10)]);
  }, [trending]);

  return (
    <>
      {trending ? (
        <>
          <div className="absolute top-0 left-0 h-screen z-[-1] w-full bg-center bg-cover px-9 overflow-hidden">
            <Image
              src={`https://image.tmdb.org/t/p/original${
                movie?.backdrop_path || movie?.poster_path
              }`}
              alt="banner"
              fill
            />
          </div>
          <div className="z-[9998] relative align-center flex flex-col justify-center px-9">
            <h1 className="movie__title text-3xl mb-5">
              {movie?.title || movie?.name || movie?.original_title}
            </h1>
            <h1 className="text-2xl mb-5 max-w-[960px]">
              {trending[0].overview}
            </h1>
            <div className="flex gap-4">
              <button className="text-[20px] bg-white hover:bg-light-gray text-black font-bold py-2 px-4 rounded inline-flex items-center">
                <AiFillPlayCircle />
                <span className="ml-3">Download</span>
              </button>
              <button className="text-[20px] bg-dark-gray hover:bg-light-gray text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
                <AiFillInfoCircle />
                <span className="ml-3">More Info</span>
              </button>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Banner;
