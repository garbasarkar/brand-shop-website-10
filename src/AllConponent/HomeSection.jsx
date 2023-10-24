// import SpecialRouter from "../PrivateAuth/SpecialRouter";
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
      {/* <SpecialRouter> */}
        <WebsiteLogo></WebsiteLogo>
      {/* </SpecialRouter> */}
      <KeyService></KeyService>
      <CarService></CarService>
      <News></News>
      <PerManth></PerManth>
    </div>
  );
};

export default HomeSection;
