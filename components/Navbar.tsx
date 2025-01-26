import React, { useEffect, useState } from "react";
import logo from "../public/logo.jpeg";

const Navbar = ({name,email}) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNavbar(false); // Hide navbar on scroll down, after 100px
      } else if (window.scrollY < lastScrollY) {
        setShowNavbar(true); // Show navbar on scroll up
      }
      setLastScrollY(window.scrollY); // Update last scroll position

      // Check which section is currently in the viewport
      const sections = document.querySelectorAll("section");
      let found = false;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0 && !found) {
          setActiveSection(section.id);
          found = true;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`hidden sm:fixed top-0 left-1/2 transform -translate-x-1/2 bg-white shadow-lg text-black sm:flex items-center justify-between gap-8 px-6 py-3 rounded-full transition-transform duration-300 z-50 ${
          showNavbar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <img src={logo} alt="DigiSir Logo" width={40} height={40} />
        </div>

        {/* Nav Links Section */}
        <div className="flex items-center gap-6">
          {["home", "about", "features", "pricing", "contact", "faq"].map(
            (section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`text-black hover:underline ${
                  activeSection === section
                    ? "underline text-[#002B5B]"
                    : ""
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' ')}
              </a>
            )
          )}
        </div>

        {/* Log In Button */}
        <div>
          {
            name === "" ? (
              <button className="bg-[#002B5B] text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors">
            <a href="/sign-in">Log In</a>
          </button>
            ) : (
              <h2>{name}</h2>
            ) 
          }
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="sm:hidden fixed top-0 left-0 right-0 bg-white shadow-lg text-black z-50">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <img src={logo} alt="DigiSir Logo" width={40} height={40} />
          </div>

          {/* Hamburger Menu */}
          <button
            onClick={toggleMobileMenu}
            className="text-black focus:outline-none z-50"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu Links */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } px-4 pb-4 bg-white`}
        >
          {["home", "about", "features", "pricing", "contact", "faq"].map(
            (section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`block text-black hover:underline ${
                  activeSection === section
                    ? "underline text-[#002B5B]"
                    : ""
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' ')}
              </a>
            )
          )}
          <button className="mt-4 bg-[#002B5B] text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors w-full">
            <a href="/sign-in">Log In</a>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
