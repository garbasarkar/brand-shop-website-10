import car1 from "/src/assets/image/indepent/team-2.svg";
import car2 from "/src/assets/image/indepent/goal-2.svg";
import car3 from "/src/assets/image/indepent/trophy-4.svg";
import car4 from "/src/assets/image/indepent/diamond-4.svg";
const News = () => {
  return (
    <div className="mt-20 max-w-6xl mx-auto bg-[#303030] text-white">
      <h1 className="text-3xl font-semibold mb-5 ml-3 pt-2">Cars</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 py-10 p-5 gap-5">
        <div className="flex items-center gap-5">
          <img className="w-16" src={car1} alt="" />
          <h1>
            <span className="text-3xl font-semibold">50+</span> <br /> team
            workers
          </h1>
        </div>
        <div className="flex items-center gap-5">
          <img className="w-16" src={car2} alt="" />
          <h1>
            <span className="text-3xl font-semibold">376+</span> <br /> our
            clients
          </h1>
        </div>
        <div className="flex items-center gap-5">
          <img className="w-16" src={car3} alt="" />
          <h1>
            <span className="text-3xl font-semibold">36+</span> <br /> offices
            in contry
          </h1>
        </div>
        <div className="flex items-center gap-5">
          <img className="w-16" src={car4} alt="" />
          <h1>
            <span className="text-3xl font-semibold">99+</span> <br /> company
            awards
          </h1>
        </div>
      </div>
    </div>
  );
};

export default News;
