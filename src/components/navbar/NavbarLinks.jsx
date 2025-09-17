import React from "react";
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

const NavbarLinks = ({ mobile }) => {
  return (
    <ul
      className={`
        flex gap-12 font-bold text-left text-white 
        ${mobile ? "flex-col" : "lg:flex-row sm:flex-col"} 
        ${mobile ? "" : "lg:static sm:absolute sm:top-[120%] sm:left-0 sm:-translate-x-0"} 
        ${mobile ? "text-xl" : "lg:text-md sm:text-xl"} 
        sm:w-full py-4 backdrop-blur-lg
      `}
    >
      {links.map(({ link, section }, index) => (
        <li key={index} className="group">
          <Link
            to={section}
            smooth={true}
            spy={true}
            duration={300}
            offset={-100}
            isDynamic={true}
            className="cursor-pointer text-white hover:text-green transition-all duration-300 active-link"
            activeClass="font-extrabold text-lg sm:text-2xl !text-green"
          >
            {link}
          </Link>
          <div className="mx-auto bg-green w-0 group-hover:w-full active-link:w-full h-[1px] transition-all duration-300" />
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;