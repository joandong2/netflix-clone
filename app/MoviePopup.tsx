import React from "react";

interface Props {
  movieId: number;
}

const MoviePopup = ({ movieId }: Props) => {
  console.log("popup component", movieId);
  return <h1>hello</h1>;
};

export default MoviePopup;
