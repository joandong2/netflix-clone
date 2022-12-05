import React from "react";
import Movielist from "./Movielist";
import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      {/* @ts-ignore */}
      <Movielist />
    </div>
  );
};

export default Home;
