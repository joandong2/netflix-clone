"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { Movie } from "../typing";
import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
  EmblaPluginType,
  EmblaEventType,
  UseEmblaCarouselType,
} from "embla-carousel-react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

interface Props {
  title: string;
  movies: Movie[];
  options?: EmblaOptionsType;
}

const EmblaRows = (props: Props) => {
  const { options, movies, title } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {movies?.map((movie) => (
            <div className="embla__slide" key={movie.id}>
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
        <button className="embla__prev" onClick={scrollPrev}>
          <BsChevronLeft />
        </button>
        <button className="embla__next" onClick={scrollNext}>
          <BsChevronRight />
        </button>
      </div>
    </div>
  );
};

export default EmblaRows;
