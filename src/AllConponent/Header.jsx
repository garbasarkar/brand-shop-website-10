import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
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
          <img src="" alt="Logo" />
        </NavLink>
      </div>
      <ul
        className={`bg-gray-400 p-5 md:flex duration-1000 absolute ${
          openNav ? "left-0 top-16" : "-top-72 left-0"
        } lg:static px-5 lg:bg-white z-10 `}
      >
        <NavLink className="mr-6 text-lg font-semibold" to="/">
          <li>Home</li>
        </NavLink>
        <NavLink className="mr-6 text-lg font-semibold" to="/product">
          <li>Add Product</li>
        </NavLink>
        <NavLink className="mr-6 text-lg font-semibold" to="/card">
          <li>Add Card</li>
        </NavLink>
        <NavLink className="mr-6 text-lg font-semibold" to="/loginAndRegister">
          <li>Login</li>
        </NavLink>
      </ul>
      <div className="flex gap-3 items-center">
        <button className="px-5 py-2 bg-purple-500 rounded text-white">
          Login
        </button>
        <AiOutlineShoppingCart className="text-3xl cursor-pointer"></AiOutlineShoppingCart>
      </div>
    </nav>
  );
};

export default Header;