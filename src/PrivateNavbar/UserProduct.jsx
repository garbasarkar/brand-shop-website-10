import { Link, useLoaderData } from "react-router-dom";
import { Rating } from "@material-tailwind/react";

const UserProduct = () => {
  const loaderData = useLoaderData();
  console.log(loaderData);
  return (
    <div className="max-w-6xl mx-auto">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, eaque.
      </p>

      <div className=" grid grid-cols-2 gap-5">
        {loaderData.map((product) => (
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
                  <Link to={`/brand/${product._id}`}><button  className="text-white px-5 py-2 bg-fuchsia-600 rounded ">
                    Details
                  </button></Link>
                  <Link to={`/brand/${product._id}`}><button className="text-white px-5 py-2 bg-fuchsia-600 rounded">
                    Update
                  </button></Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProduct;
