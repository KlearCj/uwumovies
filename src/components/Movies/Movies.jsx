import Slider from "../Slider/Slider";

const Movies = ({ popmovies,rated }) => {
  return (
    <>
    <div>
      <Slider title="Popular Movies" props={popmovies} />
    </div>
    <div>
    <Slider title="Top Rated Movies" props={rated} />
    </div>
    </>
  );
};

export default Movies;
