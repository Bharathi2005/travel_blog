import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Website Name */}
        <h1 className="text-white text-2xl font-bold">Explore</h1>

        {/* Navbar Links */}
        <ul className="flex space-x-8 text-white font-semibold">
          <li>
            <Link to="/" className="hover:text-yellow-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/create-blog" className="hover:text-yellow-500">
              Create Blog
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-yellow-500">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-yellow-500">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
