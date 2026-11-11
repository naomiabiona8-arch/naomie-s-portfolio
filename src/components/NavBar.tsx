import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const links = [
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "WhyWeb??", path: "/whyweb" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid ? "bg-white shadow-md" : "bg-gray-950"
      }`}
    >
      <div className="flex items-center justify-between gap-8 py-4 px-6">
        <Link
          to="/"
          onClick={() => {
            setOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className={`font-display text-2xl tracking-wide px-4 transition-colors duration-300 ${
            solid ? "text-gray-900" : "text-white"
          }`}
        >
          Naomie<span className="text-emerald-600">.</span>dev
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-6">
          {links.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              className={`hover:text-emerald-500 transition-colors duration-200 ${
                solid ? "text-gray-600" : "text-gray-200"
              }`}
            >
              {label}
            </Link>
          ))}

          <Link
            to="/contact"
            className="bg-emerald-600 text-white font-semibold rounded-full px-6 py-2.5"
          >
            Get a Website
          </Link>
        </div>

        {/* Hamburger for mobile */}
        <button
          className={`lg:hidden transition-colors duration-300 ${
            solid ? "text-gray-900" : "text-white"
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span
              className={`h-0.5 bg-current transition-all duration-300 ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 bg-current transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 bg-current transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`lg:hidden overflow-hidden bg-white transition-all duration-300 ${
          open ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 px-10">
          {links.map(({ label, path }) => (
            <li key={label}>
              <Link
                to={path}
                onClick={() => setOpen(false)}
                className="text-gray-700 hover:text-emerald-600"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="px-10 pt-4">
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block text-center bg-emerald-600 text-white rounded-xl py-3"
          >
            Get a Website
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
