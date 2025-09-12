import React from 'react'
import { ImArrowDownRight2 } from "react-icons/im"

const NavbarBtn = () => (
  <button
    className="px-4 py-2 rounded-full text-xl font-bold text-lightGrey
               border-cyan flex items-center gap-1 bg-gradient-to-tr
               from-cyan to-darkCyan hover:border-orange-500
               hover:scale-110 transition-all duration-500
               hover:shadow-cyanshadow"
  >
    Apply 
    <div className='sm:hidden md:block'>
      <ImArrowDownRight2 />
    </div>
  </button>
)

export default NavbarBtn
