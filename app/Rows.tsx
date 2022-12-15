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
  //const widthPerMovie = 297;
  const moviePerScroll = 6;

  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: string) => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const clientWidthMinusPadding = clientWidth - (clientWidth * 6.3) / 100;
      const widthPerMovie = Math.round(clientWidthMinusPadding / 6);

      const scrollTo =
        direction === "left"
          ? scrollLeft - widthPerMovie * moviePerScroll
          : scrollLeft + widthPerMovie * moviePerScroll;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="mb-[35px]">
      <h2 className="text-[32px] font-bold text-[#e5e5e5] hover:text-white px-9 pl-[60px]">
        {title}
      </h2>
      <div className="group relative">
        <div>
          <div className="nav-bg-left absolute z-30 top-0 bottom-0 left-0 m-auto h-auto rounded-md"></div>
          <BsChevronLeft
            className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
              !isMoved && "hidden"
            }`}
            onClick={() => handleClick("left")}
          />
        </div>

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
                className="rounded-md object-cover"
              />
            </div>
          ))}
        </div>
        <div>
          <div className="nav-bg-right absolute z-30 top-0 bottom-0 right-0 m-auto h-auto rounded-md"></div>
          <BsChevronRight
            className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
            onClick={() => handleClick("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Rows;
