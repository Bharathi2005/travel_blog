const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-300">
      <div className="bg-slate-300 p-8 rounded shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Username:</label>
            <input
              type="text"
              className="mt-2 p-2 w-full border border-gray-300 rounded"
              name="username"
              placeholder="Create a username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">E-mail:</label>
            <input
              type="email"
              className="mt-2 p-2 w-full border border-gray-300 rounded"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone No.:</label>
            <input
              type="tel"
              className="mt-2 p-2 w-full border border-gray-300 rounded"
              name="phone"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password:</label>
            <input
              type="password"
              className="mt-2 p-2 w-full border border-gray-300 rounded"
              name="password"
              placeholder="Create a password"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Confirm Password:</label>
            <input
              type="password"
              className="mt-2 p-2 w-full border border-gray-300 rounded"
              name="confirmPassword"
              placeholder="Confirm your password"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
