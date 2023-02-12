import { Flex, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styles from "./banner.module.css";

const baseUrl = "https://image.tmdb.org/t/p/original";

const Banner = ({ images }) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    setMovie(images[Math.floor(Math.random() * images.length)]);
  }, [images]);

  console.log(movie);

  return (
    <Flex className={styles.banner}>
    <Flex className={styles.content}>
        <Image
          className={styles.banner_image}
          src={`${baseUrl}${movie?.backdrop_path}`}
          alt="banner"
        />
        <div className={styles.pqdka}></div>
      </Flex>
{/*       <div className={styles.content_baner}>
        <h3 className={styles.banner_h3}>{movie.title}</h3>
        <p className={styles.banner_p}>{movie?.overview}</p>
      </div>   */}
    </Flex>
  );
};

export default Banner;
