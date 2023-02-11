import React from "react";
import styles from "./banner.module.css";

const baseUrl = "https://image.tmdb.org/t/p/w500";

const Banner = ({ images }) => {
  /*   console.log(images, "banner"); */
  return (
    <div className={styles.banner}>
  {/*     <img src={`${baseUrl}${images[0].poster_path}`} alt="banner" /> */}
    </div>
  );
};

export default Banner;
