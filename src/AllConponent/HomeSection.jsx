import BanerPart from "./BanerPart";
import CarService from "./CarService";
import WebsiteLogo from "./WebsiteLogo";

const HomeSection = () => {
  return (
    <div>
      <BanerPart></BanerPart>
      <WebsiteLogo></WebsiteLogo>
      <CarService></CarService>
    </div>
  );
};

export default HomeSection;
