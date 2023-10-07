import React from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="h-[60px] px-[30px] flex items-center">
        <div className="logo">
          <img src={logo} alt="logo" className="w-[140px]" />
        </div>
        <div className=""></div>
      </nav>
    </>
  );
};

export default Navbar;
