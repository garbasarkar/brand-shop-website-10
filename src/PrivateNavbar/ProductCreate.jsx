const ProductCreate = () => {
    const handleProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const category = form.category.value;
        const discription = form.discription.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const photo = form.photo.value;
        console.log(name, brand, category, discription, price, rating, photo);
    }
  return (
    <div className="w-3/4 mx-auto mt-16">
      <h1 className="text-3xl font-semibold text-center mb-10">
        Please Best Product Order Me!
      </h1>
      <form onSubmit={handleProduct}>
      <div className="flex">
        <div className="w-1/2">
          <label className="font-semibold text-lg">Name</label>
          <br />
          <input
            className="border py-2 rounded pl-2 w-5/6"
            type="text"
            name="name"
            id=""
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
            required
          />{" "}
          <br />
        </div>
      </div>
      <div className=" mt-3">
        <div className="mx-auto flex justify-center">
          <input
            className="border py-2 rounded pl-2 w-full"
            type="text"
            name="photo"
            id=""
            placeholder="ImageURL"
            required
          />{" "}
        </div>
      </div>
      <div className="mt-3 mx-auto flex justify-center bg-purple-600 w-3/6 py-2 rounded text-white">
        <input type="submit" value="Submit" />
      </div>
      </form>
    </div>
  );
};

export default ProductCreate;
