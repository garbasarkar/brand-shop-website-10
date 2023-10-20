import { Outlet } from "react-router-dom";
import Header from "../AllConponent/Header";
import Footer from "../AllConponent/Footer";

const RootHome = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootHome;
