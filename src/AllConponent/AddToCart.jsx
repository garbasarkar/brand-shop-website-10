import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const AddToCart = () => {
  const singleCart = useLoaderData();
  const [storeCart, setStoreCart] = useState(singleCart);
  //   useEffect(() => {
  //     fetch(`http://localhost:5000/cart`)
  //       .then((res) => res.json())
  //       .then((data) => setStoreCart(data));
  //   }, []);
  //   console.log(storeCart);
  const handleCartDelete = (id) => {
    fetch(`http://localhost:5000/cart/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          
          const remaining = storeCart.filter((cart) => cart._id !== id);
          swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          }).then((willDelete) => {
            if (willDelete) {
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Your imaginary file is safe!");
            }
          });
          setStoreCart(remaining);
        }
      });
  };
  return (
    <div className="max-w-4xl mx-auto">
      <div>
        {storeCart.map((item) => (
          <div
            className="shadow rounded p-3 flex flex-col gap-5 md:flex-row justify-between items-center"
            key={item._id}
          >
            <div className="flex  gap-5">
              <img className="w-32 md:w-48" src={item.photo} alt="" />
              <div>
                <h1>Name: {item.name}</h1>
                <p>Brand: {item.brand}</p>
                <p>Category: {item.category}</p>
                <p>Price: {item.price}</p>
                <p>Email: {item.email}</p>
              </div>
            </div>
            <button
              onClick={() => handleCartDelete(item._id)}
              className="w-20 h-10 px-5 py-2 bg-red-600 text-white rounded "
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddToCart;
