import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-300">
      <div className="bg-slate-300 p-8 rounded shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Username:</label>
            <input
              type="text"
              className="mt-2 p-2 w-full border border-gray-300 rounded"
              name="username"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password:</label>
            <input
              type="password"
              className="mt-2 p-2 w-full border border-gray-300 rounded"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
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
