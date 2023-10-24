import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../PrivateAuth/PrivateAuth";
import swal from "sweetalert";

const ProductDetails = () => {
  const { user } = useContext(AuthContext);

  // console.log(user?.email);

  const loadedData = useLoaderData();
  const para = useParams();

  const productDetails = loadedData.find(
    (singleProduct) => singleProduct._id == para.id
  );

  const store = { ...productDetails, email: user?.email };
  console.log(store);
  const handleAddToCard = () => {
    fetch(
      `https://assignment-10-server-site-fb9uggbgq-parthasarkar327-gmailcom.vercel.app/cart`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(store),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        swal("Cart add successful!");
      });
  };
  return (
    <div className="max-w-5xl mx-auto mt-5">
      <div>
        <img
          className="w-full h-[500px] mb-2"
          src={productDetails.photo}
          alt=""
        />
        <h1 className="text-lg">
          <span className="font-semibold">Name: </span>
          {productDetails.name}
        </h1>
        <div>
          <h1 className="text-lg">
            <span className="font-semibold"> Brand: </span>
            {productDetails.brand}
          </h1>
          <h1 className="text-lg">
            <span className="font-semibold">Category: </span>
            {productDetails.category}
          </h1>
        </div>
        <h1 className="text-lg">
          <span className="font-semibold">Price: </span>
          {productDetails.price}
        </h1>
        <p className="text-lg">
          <span className="font-semibold">Rating: </span>{" "}
          {productDetails.rating}
        </p>
        <button
          onClick={() => handleAddToCard(productDetails._id)}
          className="px-5 py-2 bg-purple-600 rounded text-white mt-3"
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
