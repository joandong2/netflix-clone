"use client";
import { useEffect, useState } from "react";
import { Movie, Movies } from "../typing";
import Image from "next/image";
import { AiFillPlayCircle, AiFillInfoCircle } from "react-icons/ai";

// interface Props {
//   trending: Movie[];
// }

const Banner = ({ trending }: { trending: Movie[] }) => {
  // const [movie, setMovie] = useState<Movie>();

  // useEffect(() => {
  //   //setMovie(trending[Math.floor(Math.random() * trending.length)]);
  //   setMovie(trending[1]);
  // }, [trending]);

  // console.log("trending", trending);

  return (
    <>
      <div className="absolute top-0 left-0 h-screen z-[-1] w-full bg-center bg-cover px-9">
        {trending ? (
          <>
            <Image
              src={`https://image.tmdb.org/t/p/original${
                trending[1]?.backdrop_path || trending[1]?.poster_path
              }`}
              layout="fill"
              alt="banner"
            />
            <div className="z-10 relative align-center flex flex-col justify-center h-screen px-2">
              <h1 className="movie-title text-3xl mb-5">
                {trending[1].original_title}
              </h1>
              <p className="w-[40%] text-[24px] leading-[30px] mb-5">
                {trending[1].overview}
              </p>
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
      </div>
    </>
  );
};

export default Banner;
