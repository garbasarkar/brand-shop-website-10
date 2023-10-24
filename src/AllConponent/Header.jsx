import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { useContext, useState } from "react";
import logo from "/src/assets/logo/modern-shape-automotive-car-sport-logo-vector-icon-illustration-design-2G2KCHC.jpg";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { AuthContext } from "../PrivateAuth/PrivateAuth";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [openNav, setOpenNav] = useState(false);

  const signOutHandle = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleDarkMude = () => {};
  return (
    <nav className="flex justify-between items-center px-3 md:px-10 shadow-md py-5">
      <div
        onClick={() => setOpenNav(!openNav)}
        className="text-2xl lg:hidden pl-5"
      >
        {openNav === true ? (
          <AiOutlineClose></AiOutlineClose>
        ) : (
          <AiOutlineMenu></AiOutlineMenu>
        )}
      </div>
      <div className="hidden lg:inline-flex">
        <NavLink to="/">
          <img className="w-20" src={logo} alt="Logo" />
        </NavLink>
      </div>
      <ul
        className={`bg-gray-400 p-5 md:flex duration-1000 absolute ${
          openNav ? "left-0 top-20" : "top-[-400px] left-0"
        } lg:static px-5 lg:bg-white z-10 `}
      >
        <NavLink className="mr-6 text-lg font-semibold" to="/home">
          <li>Home</li>
        </NavLink>
        <NavLink className="mr-6 text-lg font-semibold" to="/productAdd">
          <li>Products</li>
        </NavLink>
        <NavLink className="mr-6 text-lg font-semibold" to="/cards">
          <li>My Card</li>
        </NavLink>
        {/* <div> */}
        {user && (
          <>
            <NavLink className="mr-6 text-lg font-semibold" to="/productCreate">
              <li>Add Product</li>
            </NavLink>
            <NavLink className="mr-6 text-lg font-semibold" to="/service">
              <li>Service</li>
            </NavLink>
          </>
        )}
        {/* </div> */}
        <NavLink className="mr-6 text-lg font-semibold" to="/login">
          <li>Login</li>
        </NavLink>
      </ul>
      <div className="flex gap-3 items-center">
        {user && (
          <img className="w-10 h-10 rounded-full" src={user.photoURL}></img>
        )}
        {user && <p>{user.displayName}</p>}
        {user && (
          <button
            onClick={signOutHandle}
            className="px-5 py-2 bg-purple-500 rounded text-white"
          >
            Log Out
          </button>
        )}
        <BsFillBrightnessHighFill
          onClick={handleDarkMude}
        ></BsFillBrightnessHighFill>
        <AiOutlineShoppingCart className="text-3xl cursor-pointer hidden md:inline-flex"></AiOutlineShoppingCart>
      </div>
    </nav>
  );
};

export default Header;
