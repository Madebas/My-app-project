import React from "react";
import logo from "/images/logo.jpg";

const NavbarLogo = () => {
  return (
    <div className="flex items-center space-x-8">
      <img
        src={logo}
        alt="Johas Medical and Health Sciences Training Institute"
        className="h-20 w-18"
      />
      <span className="font-bold text-lg">
        Johas Medical and Health Sciences <br /> Training Institute
      </span>
    </div>
  );
};

export default NavbarLogo;
