import { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "./CartContext";

const HeadPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useContext(CartContext);

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="flex justify-between items-center h-20 px-6 lg:px-10">
          <Link to="/">
            <img src="/lg.png" alt="Logo" className="w-38" />
          </Link>


          <nav className="hidden lg:flex items-center gap-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 transition ${
                  isActive
                    ? "text-[#4294f7] font-semibold"
                    : "hover:text-[#4294f7]"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                `px-4 py-2 transition ${
                  isActive
                    ? "text-[#4294f7] font-semibold"
                    : "hover:text-[#4294f7]"
                }`
              }
            >
              Products
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-4 py-2 transition ${
                  isActive
                    ? "text-[#4294f7] font-semibold"
                    : "hover:text-[#4294f7]"
                }`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-4 py-2 transition ${
                  isActive
                    ? "text-[#4294f7] font-semibold"
                    : "hover:text-[#4294f7]"
                }`
              }
            >
              Contact
            </NavLink>
            <NavLink to="/SignupForm">
              <button className="ml-3 bg-[#4294f7] text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition duration-300 cursor-pointer">
                Login
              </button>
            </NavLink>

            <Link to="/cart" className="ml-3 relative">
              <img
                src="/cart.png"
                alt="Cart"
                className="w-7 h-7 hover:scale-110 transition"
              />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[11px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </nav>

          <div className="flex items-center gap-4 lg:hidden">
            <Link to="/cart" className="relative">
              <img
                src="/cart.png"
                alt="Cart"
                className="w-7 h-7 hover:scale-110 transition"
              />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[11px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl"
            >
              <i
                className={`fa-solid ${
                  menuOpen ? "fa-xmark" : "fa-bars"
                }`}
              ></i>
            </button>
          </div>
        </div>

         {menuOpen && (
          <div className="lg:hidden bg-white shadow-lg">
            <ul className="flex flex-col items-center py-5 space-y-4">
              <li>
                <NavLink
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-[#4294f7]"
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/products"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-[#4294f7]"
                >
                  Products
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-[#4294f7]"
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-[#4294f7]"
                >
                  Contact
                </NavLink>
              </li>

            
              <li>
                <NavLink
                  to="/SignupForm"
                  onClick={() => setMenuOpen(false)}
                >
                  <button className="bg-[#4294f7] text-white px-8 py-2 rounded-lg hover:bg-blue-600 transition duration-300 cursor-pointer">
                    Login
                  </button>
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </header>

      <hr />
    </>
  );
};

export default HeadPage;