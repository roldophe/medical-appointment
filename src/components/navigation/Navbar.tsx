import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import NavbarSearchFilters from "./NavbarSearchFilters";
import ThemeToggler from "../base/ThemeToggler";
import Logo from "../base/Logo";
import ButtonMain from "../../common/ButtonMain";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [showFilters, setShowFilters] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Doctors", href: "#doctors" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Sign In", href: "/signin" },
  ];

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  // Scroll event handler to adjust navbar style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? "bg-white dark:bg-muted-900 shadow-lg shadow-muted-300/30 dark:shadow-muted-900/40"
          : ""
      }`}
    >
      <div className="flex items-center justify-between py-3 container mx-auto px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <Logo className="w-9 h-9" />
          <span className="text-lg font-bold uppercase text-gray-800 dark:text-gray-100">
            CAREHUB
          </span>
        </Link>

        {/* Search Input */}
        <div className="hidden md:block relative flex-grow mx-6">
          <input
            type="text"
            className="peer pl-9 pr-4 py-2 h-10 text-sm rounded-md bg-white dark:bg-gray-900 text-slate-600 dark:text-gray-200 border border-slate-300 dark:border-gray-700 focus-visible:shadow-lg placeholder:text-slate-300 outline-none transition-all duration-300"
            placeholder="Search your doctor..."
            onFocus={() => setShowFilters(true)}
            onBlur={() => setShowFilters(false)}
          />
          <div className="absolute top-0 left-0 h-10 w-10 flex justify-center items-center text-slate-400">
            <FontAwesomeIcon icon={faSearch} className="w-4 h-4" />
          </div>
          {showFilters && <NavbarSearchFilters />}
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-x-8">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className={`relative py-3 transition-colors duration-300 ${
                location.pathname === item.href
                  ? "text-primary-500 border-b-2 border-primary-500"
                  : "text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggler />
          <ButtonMain to="/signup" className="w-full md:w-[200px] lg:w-[90px]">
          Sign Up
          </ButtonMain>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-500 dark:text-gray-300 focus:outline-none"
          >
            <span className="block w-6 h-0.5 bg-gray-500 dark:bg-gray-300 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-500 dark:bg-gray-300 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-500 dark:bg-gray-300"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-800 shadow-md py-4 px-6">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="block py-2 text-gray-800 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400"
            >
              {item.label}
            </Link>
          ))}
          <div className="w-full md:w-auto">
            <ButtonMain to={"/signup"} className="w-full md:w-[240px] lg:w-[110px]">
              Signup
            </ButtonMain>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
