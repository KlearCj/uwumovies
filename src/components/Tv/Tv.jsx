import React from "react";
import Slider from "../Slider/Slider";

const Tv = ({ popTv, lastTv }) => {
  return (
    <div>
      <div>
        <Slider title="Popular Tv Shows" props={popTv} />
      </div>
      <div>
        <Slider title="Top Rated Tv Shows" props={lastTv} />
      </div>
    </div>
  );
};

export default Tv;
