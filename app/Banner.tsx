"use client";
import { useEffect, useState } from "react";
import { Movie, Movies } from "../typing";
import Image from "next/image";
import { AiFillPlayCircle, AiFillInfoCircle } from "react-icons/ai";

// interface Props {
//   trending: Movie[];
// }

const Banner = ({ trending }: { trending: Movie[] }) => {
  return (
    <>
      <div className="absolute top-0 left-0 h-screen z-[-1] w-full bg-center bg-cover px-9 overflow-hidden">
        {trending ? (
          <>
            <Image
              src={`https://image.tmdb.org/t/p/original${
                trending[2]?.backdrop_path || trending[2]?.poster_path
              }`}
              layout="fill"
              alt="banner"
            />
            <div className="z-10 relative align-center flex flex-col justify-center h-screen px-2">
              <h1 className="movie__title text-3xl mb-5">
                {trending[2].original_title}
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
      </div>
    </>
  );
};

export default Banner;
