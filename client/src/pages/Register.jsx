import { signup } from "../services/api";
import { useRef } from "react";

const Register = () => {
  const usernamer = useRef(null);
  const emailr = useRef(null);
  const phoner = useRef(null);
  const passwordr = useRef(null);

  const signUp = async (e) => {
    e.preventDefault();

    const userdata = {
      username: usernamer.current.value,
      email: emailr.current.value,
      phone: phoner.current.value,
      password: passwordr.current.value,
    };
    console.log(userdata);

    try {
      const res = await signup(userdata);
      console.log(res);
      if (res.status === 200) {
        console.log("ADDED");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-300">
      <div className="bg-slate-300 p-8 rounded shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <form onSubmit={signUp}>
          <div className="mb-4">
            <label className="block text-gray-700">Username:</label>
            <input
              type="text"
              className="mt-2 p-2 w-full border border-gray-300 rounded"
              name="username"
              ref={usernamer}
              placeholder="Create a username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">E-mail:</label>
            <input
              type="email"
              className="mt-2 p-2 w-full border border-gray-300 rounded"
              name="email"
              ref={emailr}
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone No.:</label>
            <input
              type="tel"
              className="mt-2 p-2 w-full border border-gray-300 rounded"
              name="phone"
              ref={phoner}
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password:</label>
            <input
              type="password"
              className="mt-2 p-2 w-full border border-gray-300 rounded"
              name="password"
              ref={passwordr}
              placeholder="Create a password"
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
