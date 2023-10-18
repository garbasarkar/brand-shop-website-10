import { useEffect } from "react";
import silde1 from "/src/assets/image/images (1).jpg";
import silde2 from "/src/assets/image/images (2).jpg";
import silde3 from "/src/assets/image/images (3).jpg";
import silde4 from "/src/assets/image/images.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const BanerPart = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="carousel w-full mt-5 mb-20">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 ">
          <img data-aos="fade-up" src={silde1} className="w-full h-[80vh]" />
          <div data-aos="fade-left" className="pr-12 pl-2">
            <h1 className="text-3xl md:text-5xl font-semibold mb-2">
              Buy Your <span className="text-pink-600">Dream Car</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, labore quod amet quo esse dolore aut dignissimos vero
              dolorum modi.
            </p>
            <button className="text-white px-5 py-2 rounded bg-purple-600 mt-3">
              Car Now
            </button>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <img data-aos="fade-up" src={silde2} className="w-full h-[80vh]" />
          <div data-aos="fade-right" className="pr-12 pl-2">
            <h1 className="text-3xl md:text-5xl font-semibold mb-2">
              Buy Your <span className="text-pink-600">Dream Car</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, labore quod amet quo esse dolore aut dignissimos vero
              dolorum modi.
            </p>
            <button className="text-white px-5 py-2 rounded bg-purple-600 mt-3">
              Car Now
            </button>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <img data-aos="fade-up" src={silde3} className="w-full h-[80vh]" />
          <div data-aos="fade-right" className="pr-12 pl-2">
            <h1 className="text-3xl md:text-5xl font-semibold mb-2">
              Buy Your <span className="text-pink-600">Dream Car</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, labore quod amet quo esse dolore aut dignissimos vero
              dolorum modi.
            </p>
            <button className="text-white px-5 py-2 rounded bg-purple-600 mt-3">
              Car Now
            </button>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <img data-aos="fade-up" src={silde4} className="w-full h-[80vh]" />
          <div data-aos="fade-right" className="pr-12 pl-2">
            <h1 className="text-3xl md:text-5xl font-semibold mb-2">
              Buy Your <span className="text-pink-600">Dream Car</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, labore quod amet quo esse dolore aut dignissimos vero
              dolorum modi.
            </p>
            <button className="text-white px-5 py-2 rounded bg-purple-600 mt-3">
              Car Now
            </button>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default BanerPart;
