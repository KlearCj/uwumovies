import React, { useEffect, useState } from "react";
import axios from "axios";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  const [popMovies, setPopMovies] = useState([]);
  const [popTv, setPopTv] = useState([]);


  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=3e9bf10c4b9da58346377bed9363e958&language=en-US&page=1"
      )
      .then((popTvShows) => {;
        setPopMovies(popTvShows.data.results);
      });
  }, []);

  return (
    <div>
      <Navbar />
{/*       <Banner images={popMovies} /> */}
    </div>
  );
};

export default Home;
