import React, { useEffect, useState } from 'react'
import Slide from '../Slide/Slide'
import axios from 'axios'

const Home = () => {
  const [popMovies, setPopMovies] = useState([])
  useEffect(() => {
    axios.get('')
    .then((popMovies)=> setPopMovies(popMovies))
  }, [])
  
  return (
    <div>Home
      <Slide data={popMovies}/>
    </div>
  )
}

export default Home