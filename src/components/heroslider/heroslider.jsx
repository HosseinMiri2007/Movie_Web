import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import { Navigation } from "swiper/modules";
import axios from "axios";

import "swiper/css";
import "swiper/css/navigation";

const HeroSlider = () => {
  const [movie, setMovie] = useState([]);

  async function fetchApi() {
    const response = await axios.get(
      "https://moviesapi.ir/api/v1/movies?page=1"
    );

    setMovie(response.data.data);
    console.log(response.data.data);
  }

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="flex justify-center items-center text-center"
      >
        {movie.map((movie, index) => {
          return (
            <div key={index} className="bg-black p-5">
              <SwiperSlide>
                <div>
                  <img src={movie.poster} alt="movie poster" />
                  <h2>{movie.title}</h2>
                  <h3>{movie.year}</h3>
                </div>
              </SwiperSlide>
            </div>
          );
        })}
        ;
      </Swiper>
    </>
  );
};

export default HeroSlider;
