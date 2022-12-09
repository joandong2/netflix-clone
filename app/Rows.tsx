"use client";

import React from "react";
import Image from "next/image";
import { Movie } from "../typing";

interface Props {
  trending: Movie[];
  popular: Movie[];
}

const Rows = ({ trending, popular }: Props) => {
  return (
    <>
      <div className="">
        <h2 className="text-[32px] font-bold text-red-600 px-9">Trending</h2>
        <div className="movie__list">
          {trending?.map((movie) => (
            <div className="movie__thumb" key={movie.id}>
              {/* @ts-ignore */}
              <Image
                src={`https://image.tmdb.org/t/p/original${
                  movie?.backdrop_path || movie?.poster_path
                }`}
                alt="image-banner"
                width="300"
                height="165"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <h2 className="text-[32px] font-bold text-red-600 px-9">Popular</h2>
        <div className="movie__list">
          {popular?.map((movie) => (
            <div className="movie__thumb" key={movie.id}>
              {/* @ts-ignore */}
              <Image
                src={`https://image.tmdb.org/t/p/original${
                  movie?.backdrop_path || movie?.poster_path
                }`}
                alt="image-banner"
                width="300"
                height="165"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Rows;
