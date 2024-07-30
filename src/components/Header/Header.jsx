import React from "react";
import Logo from '../../assets/brand_logo.png'
import { RxHamburgerMenu } from "react-icons/rx";
const Header = () => {
  return (
    <div className="flex px-12 justify-between items-center py-4 shadow-[1px_1px_8px_black]">
      {/* Logo Div */}
      <div className="logo ">
        <img src={Logo} alt="" />
      </div>
      {/* Nav Div */}
      <div className="nav hidden sm:block">
        <ul className="flex gap-4 uppercase font-semibold">
            <li >Menu</li>
            <li>Location</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </div>
      {/* Button Div  */}
      <div className="button px-4 py-1 bg-[rgba(208,28,40,1)] text-white hidden sm:block">
        Login
      </div>
      {/* Hamburger Div  */}
      <RxHamburgerMenu className="block sm:hidden" size={24} />

    </div>
  );
};

export default Header;
