import partCar1 from "/src/assets/car-part/airbag.png";
import partCar2 from "/src/assets/car-part/steering-wheel-3.svg";
import partCar3 from "/src/assets/car-part/timing-belt.png";
import { useLoaderData } from "react-router-dom";

const HomePage = () => {
  const serviceCar = useLoaderData();
  //   console.log(serviceCar);
  return (
    <div className="max-w-6xl mx-auto text-center mt-5">
      <h1 className="text-3xl font-semibold">
        <span className="text-purple-600">Our Services</span> Product
      </h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla suscipit
        similique earum <br />
        temporibus quibusdam dignissimos repellat? Quis, voluptatum iste.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {serviceCar.map((car) => (
          <div
            className="border p-2 rounded shadow-md duration-150"
            key={car.id}
          >
            <img
              className="w-full h-full rounded-md hover:skew-x-3"
              src={car.image}
              alt=""
            />
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h1 className="text-3xl font-semibold">Car Parts</h1>
        <p className="mb-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis
          asperiores magnam <br />
          molestiae nisi quis, excepturi nostrum fugit sit alias libero ab
          maxime?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="bg-purple-200 p-3">
            <div className="flex justify-center">
              <img
                className="w-32 h-24"
                src="/src/assets/car-part/How-To-Get-The-Best-.png"
                alt=""
              />
            </div>
            <h1 className="text-2xl font-semibold mt-2 mb-1">
              Official dealer
            </h1>
            <p>
              Similique minima magni quidem aliquid illo sequi corporis fugiat
              type and llo similique magnisimilique minimamagniquidem
            </p>
            <button className="mt-3 px-5 py-2 bg-purple-600 rounded-md text-white">
              Read More
            </button>
          </div>
          <div className="bg-purple-200 p-3">
            <div className="flex justify-center">
              <img
                className="w-32 h-24"
                src="/src/assets/car-part/images.jpg"
                alt=""
              />
            </div>
            <h1 className="text-2xl font-semibold mb-1 mt-2">Fast clearance</h1>
            <p>
              Excepteur sint occaecat cupidatat dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </p>
            <button className="mt-3 px-5 py-2 bg-purple-600 rounded-md text-white">
              Read More
            </button>
          </div>
          <div className="bg-purple-200 p-3">
            <div className="flex justify-center mb-2">
              <img
                className="w-32 h-24"
                src="/src/assets/car-part/struttog67.jpg"
                alt=""
              />
            </div>
            <h1 className="text-2xl font-semibold mb-1">Warranty service</h1>
            <p>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, aliquid ex commodi
            </p>
            <button className="mt-3 px-5 py-2 bg-purple-600 rounded-md text-white">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
