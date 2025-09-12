import React from 'react';
import { Link } from "react-scroll";

const links = [
  { link: "Home", section: "Home" },
  { link: "About", section: "About" },
  { link: "Programs", section: "Programs" },
  { link: "Goals", section: "Goals" },
  { link: "Student Life", section: "Student Life" },
  { link: "Application", section: "Application" },
  { link: "Contact", section: "Contact" },
];

const NavbarLinks = () => {
  return (
    <ul className="
      flex gap-12 font-bold text-left text-white 
      lg:flex-row sm:flex-col 
      lg:relative sm:absolute 
      sm:top-[120%] left-[50%] -translate-x-[50%] 
      lg:text-md sm:text-xl 
      sm:w-full py-4 backdrop-blur-lg
    ">
      {links.map(({ link, section }, index) => (
        <li key={index} className="group">
          <Link 
            to={section}
            smooth={true}
            spy={true}
            duration={500}
            offset={-130}
            className="cursor-pointer text-white hover:text-green transition-all duration-500"
          >
            {link}
          </Link>
          <div className="mx-auto bg-green w-0 group-hover:w-full h-[1px] transition-all duration-500" />
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
