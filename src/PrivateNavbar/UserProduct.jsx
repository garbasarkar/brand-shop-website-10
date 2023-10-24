import { Link, useLoaderData } from "react-router-dom";
import { Rating } from "@material-tailwind/react";

const UserProduct = () => {
  const loaderData = useLoaderData();
  console.log(loaderData);
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold mt-5 text-center mb-4">
        <span className="text-purple-600">User All</span> Products
      </h1>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
        {loaderData.map((product) => (
          <div key={product._id}>
            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                <img
                  src={product.photo}
                  alt="image"
                  className="w-80 h-full rounded"
                />
              </div>
              <div className="p-6">
                <h6 className="block mb-1 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
                  {product.name}
                </h6>
                <p>{product.discription}</p>
                <p className="mb-1 ">
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
                <button className="px-5 py-2 mt-3 bg-purple-600 rounded-md text-white">
                  Add Product
                </button>
                {/* <div className="flex justify-between items-center gap-5 mt-2">
                  <Link to={`/brand/${product._id}`}>
                    <button className="text-white px-5 py-2 bg-fuchsia-600 rounded ">
                      Details
                    </button>
                  </Link>
                  <Link to={`/brand/${product._id}`}>
                    <button className="text-white px-5 py-2 bg-fuchsia-600 rounded">
                      Update
                    </button>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProduct;
