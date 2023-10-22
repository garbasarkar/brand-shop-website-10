import { rating } from "@material-tailwind/react";
import { useLoaderData } from "react-router-dom";

const ProductUpdate = () => {
  const loadedData = useLoaderData();
  const { _id, name, brand, price, category, discription, photo, rating } =
    loadedData;
  console.log(loadedData);
  const handleProductUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const category = form.category.value;
    const discription = form.discription.value;
    const price = form.price.value;
    const photo = form.photo.value;
    const rating = form.rating.value;
    console.log(name, brand, category, discription, price, photo, rating);
    const userOrder = {
      name,
      brand,
      category,
      discription,
      price,
      photo,
      rating,
    };

    fetch(`http://localhost:5000/brand/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert(`Product update successfull!`);
      });
  };
  return (
    <div className="w-3/4 mx-auto mt-16">
      <h1 className="text-3xl font-semibold text-center mb-10">
        Please Best Product Order Me!
      </h1>
      <form onSubmit={handleProductUpdate}>
        <div className="flex">
          <div className="w-1/2">
            <label className="font-semibold text-lg">Name</label>
            <br />
            <input
              className="border py-2 rounded pl-2 w-5/6"
              type="text"
              name="name"
              id=""
              defaultValue={name}
              placeholder="Product name"
              required
            />{" "}
            <br />
          </div>
          <div className="w-1/2">
            <label className="font-semibold text-lg">Brand Name</label>
            <br />
            <input
              className="border py-2 rounded pl-2 w-5/6"
              type="text"
              name="brand"
              id=""
              placeholder="Brand name"
              defaultValue={brand}
              required
            />{" "}
            <br />
          </div>
        </div>
        <div className="flex mt-3">
          <div className="w-1/2">
            <label className="font-semibold text-lg">Category</label>
            <br />
            <input
              className="border py-2 rounded pl-2 w-5/6"
              type="text"
              name=""
              id="category"
              placeholder="category"
              defaultValue={category}
              required
            />{" "}
            <br />
          </div>
          <div className="w-1/2">
            <label className="font-semibold text-lg">discription</label>
            <br />
            <input
              className="border py-2 rounded pl-2 w-5/6"
              type="text"
              name="discription"
              id=""
              placeholder="discription"
              defaultValue={discription}
              required
            />{" "}
            <br />
          </div>
        </div>
        <div className="flex mt-3">
          <div className="w-1/2">
            <label className="font-semibold text-lg">Price</label>
            <br />
            <input
              className="border py-2 rounded pl-2 w-5/6"
              type="text"
              name="price"
              id=""
              placeholder="Price"
              defaultValue={price}
              required
            />{" "}
            <br />
          </div>
          <div className="w-1/2">
            <label className="font-semibold text-lg">Rating</label>
            <br />
            <input
              className="border py-2 rounded pl-2 w-5/6"
              type="text"
              name="rating"
              id=""
              placeholder="Rating"
              defaultValue={rating}
              required
            />{" "}
            <br />
          </div>
        </div>
        <div className="w-1/2">
          <label className="font-semibold text-lg">PhotoURL</label>
          <br />
          <input
            className="border py-2 rounded pl-2 w-full"
            type="text"
            name="photo"
            id=""
            placeholder="ImageURL"
            defaultValue={photo}
            required
          />{" "}
          <br />
        </div>
        <div className=" mt-3">
          <div className="mx-auto flex justify-center"></div>
        </div>
        <div className="mt-3 mx-auto flex justify-center bg-purple-600 w-3/6 py-2 rounded text-white">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default ProductUpdate;
