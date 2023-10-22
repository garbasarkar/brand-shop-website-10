import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
  const loadedData = useLoaderData();
  const para = useParams();
  //   console.log(loadedData, para);
  const productDetails = loadedData.find(
    (singleProduct) => singleProduct._id == para.id
  );
  // console.log(productDetails);

  const handleAddToCard = (id) => {
    console.log(id)
  }
  return (
    <div className="max-w-6xl mx-auto">
      <h1>Single Data Details!</h1>
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
        <button onClick={() => handleAddToCard(productDetails._id)} className="px-5 py-2 bg-purple-600 rounded text-white mt-3">
          Add Product
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
