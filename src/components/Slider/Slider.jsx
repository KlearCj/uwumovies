import { Flex, Text} from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Modalito from "../modal/modal";
import styles from "./slider.module.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5.5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4.5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3.5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.5,
  },
};

const baseUrl = "https://image.tmdb.org/t/p/original";

const Slider = ({ title, props }) => {

  return (
    <Flex className={styles.slider}>
      <Flex m="10px">
        <Text fontSize="2xl">{title}</Text>
      </Flex>
      <Flex className={styles.sliderbx}>
        <Carousel responsive={responsive} className={styles.carousel}>
          {props?.map((movie) => {
            return (
              <Flex
                className={styles.item}
                key={movie.id}
              >
                <img src={`${baseUrl}${movie.poster_path}`} alt={movie.id} />
                <Modalito movie={movie} />
              </Flex>
            );
          })}
        </Carousel>
        <div className={styles.shadow}></div>
      </Flex>
    </Flex>
  );
};

export default Slider;
