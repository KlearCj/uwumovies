import React, { useEffect, useState } from 'react'
import Slider from '../Slide/Slider'
import axios from 'axios'
import MoviesCards from './MoviesCards'
import TvCards from './TvCards'

const Home = () => {
  const [popMovies, setPopMovies] = useState([])
  const [popTv, setPopTv] = useState([])

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=3e9bf10c4b9da58346377bed9363e958&language=en-US&page=1')
    .then((popMovies)=> setPopMovies(popMovies))

    axios.get("https://api.themoviedb.org/3/tv/popular?api_key=3e9bf10c4b9da58346377bed9363e958&language=en-US&page=1")
    .then((popTvShows)=> setPopTv(popTvShows))
  }, [])
  
  return (
    <div>Home
     {/*  <Slider data={popMovies.data}/> */}
     <MoviesCards data={popMovies.data}/>
     <TvCards data={popTv.data}/>
    </div>
  )
}

export default Home