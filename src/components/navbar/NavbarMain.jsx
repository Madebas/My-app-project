import React, { useEffect, useState, useCallback } from 'react';
import NavbarLogo from './NavbarLogo';
import NavbarLinks from './NavbarLinks';
import NavbarBtn from './NavbarBtn';
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { motion, AnimatePresence } from 'framer-motion';

const NAV_GREEN = '#205030';

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => setMenuOpen(v => !v), []);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = menuOpen ? 'hidden' : prev || '';
    return () => { document.body.style.overflow = prev || ''; };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="w-full">
      <nav
        className="w-full relative z-50"
        style={{ backgroundColor: NAV_GREEN }}
      >
        <div className=" w-full flex items-center justify-between px-4 sm:px-6 lg:px-8 text-white py-4">
          <div className="flex items-center">
            <NavbarLogo />
          </div>
          <div className="hidden md:flex items-center justify-center">
            <div className="flex items-center gap-8 text-white">
              <NavbarLinks />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <NavbarBtn />
            </div>
            <button
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-white/30 text-white hover:bg-white/10 transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <RxCross1 className="text-xl" /> : <RxHamburgerMenu className="text-xl" />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute left-0 top-full w-full text-white border-t border-white/15"
              style={{ backgroundColor: NAV_GREEN }}
            >
              <div className="px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex flex-col gap-4">
                  <NavbarLinks mobile />
                </div>
                <div className="mt-4 pt-4 border-t border-white/15">
                  <NavbarBtn />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default NavbarMain;
