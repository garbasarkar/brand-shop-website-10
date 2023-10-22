import car from "/src/assets/image/cars/car-5-1280x516.png";
import keys1 from "/src/assets/image/cars/key-2.svg";
import keys2 from "/src/assets/image/cars/gears.svg";
import keys3 from "/src/assets/image/cars/air-filter.svg";
import keys4 from "/src/assets/image/cars/brake-disk.svg";
const KeyService = () => {
  return (
    <div className="max-w-6xl mx-auto mt-16 flex flex-col md:flex-row gap-5 items-center justify-between">
      <div className="flex-1">
        <div>
          <p>By the readable content</p>
          <h1 className="text-3xl font-semibold">
            It is a long established fact that a reader <br /> bedistracted by
            the readable
          </h1>
        </div>
        <img src={car} alt="" />
      </div>
      <div className="flex-1 grid-cols-1 md:grid md:grid-cols-2 gap-5">
        <div className="shadow p-2 rounded bg-gray-200">
          <div className="flex gap-3 items-center mb-2">
            <img className="w-14" src={keys1} alt="" />
            <h1>New Cars Sale</h1>
          </div>
          <p>
            Volutpat sodales, mauris erat rutrum deserunt sed pharetra mollis,
            nunc leo eu maecenas nascetur duis viverra nam vitae rutrum deserunt
          </p>
        </div>
        <div className="shadow p-2 rounded bg-gray-200">
          <div className="flex gap-3 items-center mb-2">
            <img className="w-14" src={keys2} alt="" />
            <h1>New Cars Sale</h1>
          </div>
          <p>
            Volutpat sodales, mauris erat rutrum deserunt sed pharetra mollis,
            nunc leo eu maecenas nascetur duis viverra nam vitae rutrum deserunt
          </p>
        </div>
        <div className="shadow p-2 rounded bg-gray-200">
          <div className="flex gap-3 items-center mb-2">
            <img className="w-14" src={keys3} alt="" />
            <h1>New Cars Sale</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste error
            aspernatur magnam modi, laborum molestiae, hic nulla eum maxime.
          </p>
        </div>
        <div className="shadow p-2 rounded bg-gray-200">
          <div className="flex gap-3 items-center mb-2">
            <img className="w-14" src={keys4} alt="" />
            <h1 className="font-semibold">New Cars Sale</h1>
          </div>
          <p>
            Volutpat sodales, mauris erat rutrum deserunt sed pharetra mollis,
            nunc leo eu maecenas nascetur duis viverra nam vitae rutrum deserunt
          </p>
        </div>
      </div>
    </div>
  );
};

export default KeyService;
