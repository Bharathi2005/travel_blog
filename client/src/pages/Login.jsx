import { useRef, useState } from "react"; 
import { Link, useNavigate } from "react-router-dom"; 
import { login } from "../services/api"; 

const Login = () => {
  const emailRef = useRef(null); 
  const passwordRef = useRef(null); 
  const [error, setError] = useState(""); 
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault(); 

    const credentials = {
      email: emailRef.current.value, 
      password: passwordRef.current.value, 
    };

    try {
      const res = await login(credentials); 
      if (res.status === 200) {
        console.log("Login successful");
        navigate("/"); 
      }
    } catch (error) {
      console.error("Login failed:", error);
      setError("Invalid email or password."); 
    }
  };

  return (
    <div
      className="min-h-screen bg-opacity-0 flex clr1 items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://ik.imagekit.io/fdc5q1zdo/home1.png?updatedAt=1728384534897')`,
      }}
    >
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white bg-opacity-50 p-8 rounded shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form onSubmit={handleLogin}>
          {" "}
      
          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input
              type="text"
              className="mt-2 p-2 w-full border border-gray-300 rounded"
              name="email"
              placeholder="Enter your Email"
              ref={emailRef} 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password:</label>
            <input
              type="password"
              className="mt-2 p-2 w-full border border-gray-300 rounded"
              name="password"
              placeholder="Enter your password"
              ref={passwordRef} 
              required 
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}{" "}
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
    </div>
  );

};

export default Login;
