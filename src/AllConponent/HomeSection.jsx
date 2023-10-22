import BanerPart from "./BanerPart";
import CarService from "./CarService";
import KeyService from "./KeyService";
import News from "./News";
import PerManth from "./PerManth";
import WebsiteLogo from "./WebsiteLogo";

const HomeSection = () => {
  return (
    <div>
      <BanerPart></BanerPart>
      <WebsiteLogo></WebsiteLogo>
      <KeyService></KeyService>
      <CarService></CarService>
      <News></News>
      <PerManth></PerManth>
    </div>
  );
};

export default HomeSection;
