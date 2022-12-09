"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Movie } from "../typing";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

interface Props {
  title: string;
  movies: Movie[];
}

const Rows = ({ title, movies }: Props) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: string) => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="group relative">
        <h2 className="text-[32px] font-bold text-red-600 px-9">{title}</h2>
        <BsChevronLeft
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
            !isMoved && "hidden"
          }`}
          onClick={() => handleClick("left")}
        />
        <div className="movie__list" ref={rowRef}>
          {movies?.map((movie) => (
            <div className="movie__thumb" key={movie.id}>
              {/* @ts-ignore */}
              <Image
                src={`https://image.tmdb.org/t/p/original${
                  movie?.backdrop_path || movie?.poster_path
                }`}
                alt="image-banner"
                width="300"
                height="165"
                className="rounded-sm object-cover"
              />
            </div>
          ))}
        </div>
        <BsChevronRight
          className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
          onClick={() => handleClick("right")}
        />
      </div>
    </>
  );
};

export default Rows;
