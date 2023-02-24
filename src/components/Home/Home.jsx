import React, { useEffect, useState } from "react";
import axios from "axios";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import Movies from "../Movies/Movies";
import Tv from "../Tv/Tv";

const Home = () => {
  const [popMovies, setPopMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [tv, setTv] = useState([]);
  const [lastTv, setLastTv] = useState([]);

  useEffect(() => {
    async function startFetching() {
      const pop = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=3e9bf10c4b9da58346377bed9363e958&language=en-US&page=1"
      );
      setPopMovies(pop?.data?.results);
      const rated = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=3e9bf10c4b9da58346377bed9363e958&language=en-US&page=1"
      );
      setTopMovies(rated?.data.results);

      const tv = await axios.get(
        "https://api.themoviedb.org/3/tv/popular?api_key=3e9bf10c4b9da58346377bed9363e958&language=en-US&page=1"
      );
      setTv(tv.data.results);
      const ratedTv = await axios.get(
        "https://api.themoviedb.org/3/tv/top_rated?api_key=3e9bf10c4b9da58346377bed9363e958&language=en-US&page=1"
      );
      setLastTv(ratedTv.data.results);
    }

    startFetching();
  }, []);

  return (
    <div>
      <Navbar />
      <Banner images={popMovies} />
      <Movies popmovies={popMovies} rated={topMovies} />
      <Tv popTv={tv} lastTv={lastTv} />
    </div>
  );
};

export default Home;
