import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, IconButton, Img } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
const img = "https://image.tmdb.org/t/p/w500"
const data=["https://i.pinimg.com/236x/89/b7/b7/89b7b7da95b1d99283abf9dbdebf9f9a.jpg"]
const Slider = () => {

  //TENGO QUE CREAR UNA FUNCION QUE SAQUE TODOS LOS URL :c
  const [popMovies, setPopMovies] = useState([])
  const [index, setIndex] = useState(0);
  const [image, setImage] = useState([`${img}${popMovies.data?.results[0].poster_path}`][0]);
console.log([`${img}${popMovies.data?.results[0].poster_path}`][0])
  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=3e9bf10c4b9da58346377bed9363e958&language=en-US&page=1')
    .then((popMovies)=> setPopMovies(popMovies))
  }, [])
  

  const selectNewImage = (num, array, next = true) => {
    const condition = next ? index < data.length-1 : index > 0;
    const nextIndex = next ? condition? index + 1: 0
      : condition ? index - 1: data.length - 1;

      setImage(data[nextIndex])
      setIndex(nextIndex)
  };

  const previous = () => {
 selectNewImage(index, data, false )
  };

  const next = () => {
    selectNewImage(index, data)
  };

  return (
    <>
      <Img src={`${image}`} alt="poster"/>
      <IconButton onClick={previous} icon={<ArrowLeftIcon />} />
      <IconButton onClick={next} icon={<ArrowRightIcon />} />
    </>
  );
};

export default Slider;
