import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Recycle, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Marketplace", path: "/marketplace" },
    { name: "About", path: "/about" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-[#2d5016] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link 
            to="/" 
            className="flex items-center gap-2 cursor-pointer group hover:scale-105 transition-transform duration-300"
          >
            <div className="relative flex items-center justify-center w-10 h-10 bg-white/10 rounded-full group-hover:bg-white/20 transition-all">
               <Recycle className="w-6 h-6 text-[#a4d65e] animate-[spin_10s_linear_infinite]" />
            </div>
            <span className="text-2xl font-bold tracking-tight font-['Archivo_Black']">
              Circular<span className="text-[#a4d65e]">Connect</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 transform hover:scale-110 ${
                    isActive(link.path)
                      ? "bg-[#a4d65e] text-[#2d5016] font-bold"
                      : "text-gray-100 hover:bg-white/10 hover:text-[#a4d65e]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/signup"
                className="bg-white text-[#2d5016] px-5 py-2 rounded-full font-bold hover:bg-[#a4d65e] transition-all duration-300 shadow-md inline-block transform hover:scale-105"
              >
                Login / Join
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[#264212] pb-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? "bg-[#a4d65e] text-[#2d5016]"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/signup"
              onClick={() => setIsOpen(false)}
              className="block w-full mt-4 bg-white text-[#2d5016] px-5 py-3 rounded-md font-bold text-center"
            >
              Login / Join
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;