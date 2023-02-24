import { Flex, Heading, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styles from "./banner.module.css";

const baseUrl = "https://image.tmdb.org/t/p/original";

const Banner = ({ images }) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    setMovie(images[Math.floor(Math.random() * images?.length)]);
  }, [images]);


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
      <Flex className={styles.content_baner}>
        <Heading as="h2" size="2xl" noOfLines={1}>
          {movie?.title}
        </Heading>
        <Heading as="h3" size="lg" noOfLines={2} mt="20px" w="50%">
          {movie?.overview}
        </Heading>
      </Flex>
    </Flex>
  );
};

export default Banner;
