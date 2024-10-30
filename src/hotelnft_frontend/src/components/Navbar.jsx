import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, ShoppingCart, Menu, X } from "lucide-react";
import { useCartStore } from "../store/cartStore";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useState("Gurugram, Haryana");
  const cartItems = useCartStore((state) => state.items);

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="logo" className="w-44 h-16" />
          </Link>

          {/* Location Selector */}
          <div className="hidden md:flex items-center">
            <MapPin className="w-5 h-5 text-red-500 mr-2" />
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="text-sm border-none focus:ring-0"
            >
              <option value="Delhi, NCR">Delhi, NCR</option>
              <option value="Gurugram, Haryana">Kanpur, UP</option>
            </select>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-red-500">
              Home
            </Link>
            <Link to="/outlets" className="text-gray-700 hover:text-red-500">
              Outlets
            </Link>
            <Link to="/catering" className="text-gray-700 hover:text-red-500">
              Catering
            </Link>
            <Link to="/cooks" className="text-gray-700 hover:text-red-500">
              Cooks
            </Link>
            {/* <Link to="/laundry" className="text-gray-700 hover:text-red-500">
              Laundry
            </Link> */}
            <Link to="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-red-500" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex items-center mb-4">
              <MapPin className="w-5 h-5 text-red-500 mr-2" />
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="text-sm border-none focus:ring-0"
              >
                <option value="Gurugram, Haryana">Gurugram, Haryana</option>
                <option value="Delhi, NCR">Delhi, NCR</option>
              </select>
            </div>
            <div className="space-y-4">
              <Link
                to="/"
                className="block text-gray-700 hover:text-red-500"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/outlets"
                className="block text-gray-700 hover:text-red-500"
                onClick={() => setIsOpen(false)}
              >
                Outlets
              </Link>
              <Link
                to="/catering"
                className="block text-gray-700 hover:text-red-500"
                onClick={() => setIsOpen(false)}
              >
                Catering
              </Link>
              <Link
                to="/cooks"
                className="block text-gray-700 hover:text-red-500"
                onClick={() => setIsOpen(false)}
              >
                Cooks
              </Link>
              <Link
                to="/cart"
                className="flex items-center text-gray-700 hover:text-red-500"
                onClick={() => setIsOpen(false)}
              >
                <ShoppingCart className="w-6 h-6 mr-2" />
                Cart {cartItemCount > 0 && `(${cartItemCount})`}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
