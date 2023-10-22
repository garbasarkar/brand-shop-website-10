import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const WebsiteLogo = () => {
  const [dataStore, setDataStore] = useState([]);
  useEffect(() => {
    fetch(`/WebLogo.json`)
      .then((res) => res.json())
      .then((data) => setDataStore(data));
  }, []);
  //   console.log(dataStore);
  // useEffect( () => {
  //     fetch(`http://localhost:5000/brands/`)
  // .then(res => res.json())
  // .then(data => setDataStore(data))
  // },[])
  return (
    <div className="max-w-6xl mx-auto text-center">
      <h1 className="text-3xl font-semibold mb-2">Service Brand Logo</h1>
      <p className="mb-10">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
        deleniti! Officia iste odio <br /> suscipit, modi, numquam, fuga
        necessitatibus omnis voluptas dicta molestiae ut!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
        {dataStore.map((image) => (
          <div
            className="shadow-md hover:cursor-pointer rounded-md"
            key={image.id}
          >
            <Link to={`/image/${image.brand}`}>
              <img
                className="w-full h-36 rounded-md"
                src={image.image}
                alt=""
              />
              <h1 className="mt-2">{image.brand}</h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebsiteLogo;
