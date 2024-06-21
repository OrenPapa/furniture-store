import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import "../index.css";
import PropTypes from "prop-types";

function Navbar() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div
      className={`fixed flex justify-center w-full py-8 bg-green-800 transition-colors duration-300 z-50`}
    >
      <div className="w-full flex flex-row justify-between max-w-[1600px] mx-2">
        <NavLink
          to="/"
          className={`logo text-2xl font-bold cursor-pointer select-none text-white`}
          style={{ lineHeight: 2 }}
        >
          Furniture
        </NavLink>
        <div className="flex items-center space-x-8">
          <div className="menu flex space-x-8">
            <NavLink
              exact
              to="/"
              className={`menu-item px-6 py-2 border-b-4 cursor-pointer select-none text-white ${
                location.pathname === "/"
                  ? "border-yellow-500"
                  : "border-transparent"
              }`}
            >
              Home
            </NavLink>
            <NavLink
              to="/about-us"
              className={`menu-item px-6 py-2 border-b-4 cursor-pointer select-none text-white ${
                location.pathname === "/about-us"
                  ? "border-yellow-500"
                  : "border-transparent"
              }`}
            >
              About us
            </NavLink>
            <NavLink
              to="/services"
              className={`menu-item px-6 py-2 border-b-4 cursor-pointer select-none text-white ${
                location.pathname === "/services"
                  ? "border-yellow-500"
                  : "border-transparent"
              }`}
            >
              Services
            </NavLink>
            <NavLink
              to="/blog"
              className={`menu-item px-6 py-2 border-b-4 cursor-pointer select-none text-white ${
                location.pathname === "/blog"
                  ? "border-yellow-500"
                  : "border-transparent"
              }`}
            >
              Blog
            </NavLink>
            <NavLink
              to="/contact-us"
              className={`menu-item px-6 py-2 border-b-4 cursor-pointer select-none text-white ${
                location.pathname === "/contact-us"
                  ? "border-yellow-500"
                  : "border-transparent"
              }`}
            >
              Contact us
            </NavLink>
          </div>
          <div className="icons flex space-x-10">
            <FontAwesomeIcon
              icon={faUser}
              className={`text-white cursor-pointer`}
            />
            <FontAwesomeIcon
              icon={faShoppingCart}
              className={`text-white cursor-pointer`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  colored: PropTypes.bool,
};

Navbar.defaultProps = {
  colored: false,
};

export default Navbar;
