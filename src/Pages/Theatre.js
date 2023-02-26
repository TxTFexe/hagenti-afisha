import React from "react";
import { Slider } from "../Components";

function Films() {
  const images = [
    {
      id: 1,
      image: "https://images.kinorium.com/movie/poster/42633/w1500_2921968.jpg",
    },
    {
      id: 2,
      image:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/9773f36b-f542-4242-9c04-1b6148104691/3840x",
    },
    {
      id: 3,
      image: "http://melkoskop.info/wp-content/uploads/ScanImage058.jpg",
    },
  ];

  return (
    <>
      <Slider content={images} />
      <div>Весь оставшийся контент</div>
    </>
  );
}

export default Films;
