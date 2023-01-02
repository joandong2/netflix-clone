"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Movie, Genre } from "../typing";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FaPlay, FaThumbsUp } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { SlArrowDown } from "react-icons/sl";
import MoviePopup from "./MoviePopup";

interface Props {
  title: string;
  movies: Movie[];
  genres: Genre[];
}

const Rows = ({ title, movies, genres }: Props) => {
  //const widthPerMovie = 297;
  const moviePerScroll = 6;

  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentMovieId, setCurrentMovieId] = useState<number | null>(null);

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

  const onClickPopup = (id: number) => {
    console.log("onclick func id", id);

    <MoviePopup movieId={id} />;
  };

  return (
    <div>
      <h2 className="text-[24px] font-medium text-[#e5e5e5] hover:text-white px-9 pl-[60px]">
        {title}
      </h2>
      <div className="group relative">
        <div className="mb-[-50px]">
          <BsChevronLeft
            className={`absolute top-[-30%] bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
              !isMoved && "hidden"
            }`}
            onClick={() => handleClick("left")}
          />
        </div>
        <div className="movie__list" ref={rowRef}>
          {movies &&
            movies?.map((movie) => (
              <div className="movie__thumb" key={movie.id}>
                <div className="relative">
                  <Image
                    src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                    alt="image-banner"
                    width="300"
                    height="165"
                    className="rounded-md"
                  />
                </div>
                <div
                  className="thumb__details"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalCenteredScrollable"
                  onClick={() => {
                    onClickPopup(movie.id);
                  }}
                >
                  <div className="flex justify-between items-center mb-[8px]">
                    <ul className="flex buttons">
                      <li>
                        <a href="#">
                          <FaPlay />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <AiOutlinePlus />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FaThumbsUp />
                        </a>
                      </li>
                    </ul>
                    <ul className="flex buttons">
                      <li>
                        <a href="#">
                          <SlArrowDown />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center space-x-2 mb-[8px]">
                    <p className="text-green-700 font-bold">83% Match</p>
                    <p className="border border-white py-[1px] px-[6px]">R</p>
                    <p className="font-bold">2h 33m</p>
                    <p className="border border-white py-[1px] px-[6px]">HD</p>
                  </div>
                  <div className="flex">
                    <ul className="categories flex space-x-1 items-center">
                      {movie.genre_ids.map((cat_id) =>
                        genres?.map((genre) => {
                          if (genre.id == cat_id) {
                            return <li key={genre.id}>{genre.name}</li>;
                          }
                          return null;
                        })
                      )}
                    </ul>
                  </div>
                </div>
                {/*thumb__details*/}
              </div>
            ))}
        </div>
        <div>
          <BsChevronRight
            className="absolute top-[-30%] bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
            onClick={() => handleClick("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Rows;
