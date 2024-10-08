import { useRef, useState } from "react"; // Import useRef and useState
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { login } from "../services/api"; // Import the login function from your API

const Login = () => {
  const emailRef = useRef(null); // Ref for the email input
  const passwordRef = useRef(null); // Ref for the password input
  const [error, setError] = useState(""); // State for error messages
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    const credentials = {
      email: emailRef.current.value, // Get email from the ref
      password: passwordRef.current.value, // Get password from the ref
    };

    try {
      const res = await login(credentials); // Call the login function with credentials
      if (res.status === 200) {
        console.log("Login successful");
        navigate("/"); // Redirect to the home page on successful login
      }
    } catch (error) {
      console.error("Login failed:", error);
      setError("Invalid email or password."); // Set error message on failure
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-300">
      <div className="bg-slate-300 p-8 rounded shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form onSubmit={handleLogin}>
          {" "}
          {/* Attach handleLogin to form submit */}
          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input
              type="text"
              className="mt-2 p-2 w-full border border-gray-300 rounded"
              name="email"
              placeholder="Enter your Email"
              ref={emailRef} // Attach ref to input
              required // Make this field required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password:</label>
            <input
              type="password"
              className="mt-2 p-2 w-full border border-gray-300 rounded"
              name="password"
              placeholder="Enter your password"
              ref={passwordRef} // Attach ref to input
              required // Make this field required
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}{" "}
          {/* Display error message */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-gray-600">
            New user?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
