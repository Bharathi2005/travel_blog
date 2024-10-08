import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectAuth, logout } from "../redux/userSlice"; // Import selectors and actions

const Navbar = () => {
  const auth = useSelector(selectAuth); // Get the auth status from Redux
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-2xl shadow-lg p-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">WanderBee</h1>

        <ul className="flex space-x-8 text-white text-lg font-extrabold">
          <li>
            <Link to="/" className="hover:text-black">
              Home
            </Link>
          </li>
          {auth && (
            <li>
              <Link to="/create-blog" className="hover:text-black">
                Create Blog
              </Link>
            </li>
          )}
          <li>
            <Link to="/blog" className="hover:text-black">
              Blog
            </Link>
          </li>
          {auth ? (
            <li>
              <button onClick={handleLogout} className="hover:text-black">
                Logout
              </button>
            </li>
          ) : (
            <li>
              <Link to="/login" className="hover:text-black">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
