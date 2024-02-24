import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Signup from "./Signup";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      if (response.ok) {
        const responseData = await response.json();
        setData(responseData);
        console.log("Login successful");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };
  return (
    // <div className="w-1/2 h-4/5 j-full bg-yellow-400 flex flex-col align-center justify-center text-center px-4">
    //   <form
    //     onSubmit={handleSubmit}
    //     className="flex flex-col justify-center align-center bg-green-400  px-3"
    //   >


    //     <div className="inputs ">
    //       <div className="flex ">
    //         <FaUser />
    //         <input
    //           type="email"
    //           placeholder="email"
    //           className="mb-2 p-2 px-4 "
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //         />
    //       </div>
    //       <div className="flex">
    //         <FaLock />
    //         <input
    //           type="password"
    //           placeholder="password"
    //           className="mb-2 p-2 px-4"
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //         />
    //       </div>
    //     </div>


    //     {/* <p className="flex flex-col">Don't have an account? <br />
    //             <a href="" className="px-3 py-2 bg-purple-400 py-1">Sign up</a>
    //             </p> */}
    //     <div>
    //       Don't have an account?{" "}
    //       <span className="text-white font-semibold">
    //         <a href="">Sign up</a>
    //       </span>
    //     </div>
    //     <button
    //       className="bg-purple-800 rounded-lg text-xl text-white px-4 py-2 mb-2 mt-3"
    //       type="submit"
    //     >
    //       login
    //     </button>
    //   </form>
    //   <p>{data.message}</p>
    // </div>
    <>
     <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 shadow-md ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
          <h1 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight  text-gray-900">
            Sign in to your account
          </h1>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit} action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                  className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="flex space-x-5 px-1 text-xl">
                <p>Don't have an account?</p>
                {/* <Link to='/user/Signup' className="font-semibold hover:text-blue-600"><Signup /></Link> */}
                <Link to="/user/Signup" className='font-semibold hover:text-blue-600'>Signup</Link><p></p>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-3 text-xl  font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
              >
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
