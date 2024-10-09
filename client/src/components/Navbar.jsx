import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-2xl shadow-lg p-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Website Name */}
        <h1 className="text-white text-2xl font-bold">WanderBee</h1>

        {/* Navbar Links */}
        <ul className="flex space-x-8 text-white text-lg font-extrabold">
          <li>
            <Link to="/" className="hover:text-black">
              Home
            </Link>
          </li>
          <li>
            <Link to="/create-blog" className="hover:text-black">
              Create Blog
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-black">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-black">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
