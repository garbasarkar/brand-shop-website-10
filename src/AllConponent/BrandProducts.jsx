import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";

import sliders1 from "/src/assets/slider/images (1).jpg";
import sliders2 from "/src/assets/slider/bmw-i5-m60-xdrive-2023.png";
import sliders3 from "/src/assets/slider/1986-BMW-E30-M3-Legend-Series.jpg";
import sliders4 from "/src/assets/slider/P90450318_lowRes_2-series-coup-imager.jpg";

const BrandProducts = () => {
  const [carStore, setCarStore] = useState([]);
  const params = useParams();
  console.log("brand:", params);
  useEffect(() => {
    fetch(
      `https://assignment-10-server-site-fb9uggbgq-parthasarkar327-gmailcom.vercel.app/brand`
    )
      .then((res) => res.json())
      .then((data) => setCarStore(data));
  }, []);
  const filters = carStore.filter((car) => car.brand == params.id);
  console.log(filters);
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="max-w-6xl mx-auto mt-10">
      <div className="mb-16">
        <Slider {...settings}>
          <div className="w-full h-[70vh]">
            <img src={sliders3} alt="" />
          </div>
          <div className="">
            <img className="w-full h-[70vh]" src={sliders1} alt="" />
          </div>
          <div>
            <img className="w-full h-[70vh]" src={sliders2} alt="" />
          </div>
        </Slider>
      </div>

      {
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
          {filters.map((product) => (
            <div key={product._id}>
              <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                  <img
                    src={product.photo}
                    alt="image"
                    className="object-cover h-full"
                  />
                </div>
                <div className="p-6">
                  <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
                    {product.name}
                  </h6>
                  <p className="mb-2 ">
                    <span className="font-semibold">Category:</span>{" "}
                    {product.category}
                  </p>
                  <div className="flex justify-between items-center">
                    <p>
                      <span className="font-semibold">Price:</span>{" "}
                      {product.price}
                    </p>

                    <div className="rating rating-sm">
                      <input
                        type="radio"
                        name="rating-6"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-6"
                        className="mask mask-star-2 bg-orange-400"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-6"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-6"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-6"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center gap-5 mt-2">
                    <Link to={`/brands/${product._id}`}>
                      <button className="text-white px-2 md:px-5 py-2 bg-fuchsia-600 rounded ">
                        Details
                      </button>
                    </Link>
                    <Link to={`/brand/${product._id}`}>
                      <button className="text-white px-2 md:px-5 py-2 bg-fuchsia-600 rounded">
                        Update
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default BrandProducts;
