import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
const CarService = () => {
  const [car, setCar] = useState([]);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  useEffect(() => {
    fetch(`/serviceCar.json`)
      .then((res) => res.json())
      .then((data) => setCar(data));
  }, []);
  return (
    <div className="max-w-6xl mx-auto mt-20 text-center">
      <h1 className="text-3xl font-semibold">Sale Cars</h1>
      <p className="mt-1 mb-5">
        Rutrum ante tempus mauris facilisi, leo faucibus, egestas diamlorem
        malesu, vitae mauris.
      </p>
      <Slider {...settings}>
        {car.map((car) => (
          <div className="ml-5 mr-5" key={car.id}>
            <img className="w-full h-48 px-3" src={car.image} alt="" />
            <div className="absolute mt-[-40px] ml-[12px]">
              <h1 className="w-24 px-5 py-2 rounded bg-purple-600 hover:bg-red-600 text-white">
                $ {car.price}
              </h1>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarService;
