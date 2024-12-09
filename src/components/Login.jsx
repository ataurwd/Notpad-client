import React, { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import AOS from 'aos';
import toast from "react-hot-toast";
import Lottie from "react-lottie-player";
import animation from "../../src/lottie/Form.json";

const Login = () => {
  const { loginWithGoogle, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const loaction = useLocation();

  const handelGoogleLogin = () => {
    loginWithGoogle().then((res) => {
      setUser(res.user);
      navigate(loaction?.state ? loaction.state : "/");
      toast.success("successfully logged in");
    });
  };

  const handelSignIn = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const newUser = { name, email };
    fetch("https://http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  // for animation
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });  
  }, []);
  return (
    <div className="w-full flex h-[90vh]">
      <div className="w-1/2 bg-[#ecdcad] grid place-items-center">
        <div data-aos="fade-down-right" className="text-center w-1/2 mx-auto space-y-5">
          <h1 className="font-rancho text-7xl">Welcome Back</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            minima exercitationem saepe facilis quas, vel soluta possimus,
            dolorum perspiciatis, corporis molestias cumque. Quaerat mollitia
            vitae quae rem molestiae exercitationem veritatis?
          </p>
        </div>
      </div>
      <div data-aos="fade-down-left" className="my-[5vh] mx-auto w-1/2 max-w-md rounded-lg border bg-white p-8 shadow-md dark:border-zinc-700 dark:bg-zinc-900">
        <form className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white font-rancho">
           Login Now
          </h1>
          <div className="space-y-4">
            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="nui_email" className="block">
                Email
              </label>
              <div className="relative">
                <input
                  autoComplete="off"
                  id="nui_email"
                  type="email"
                  placeholder="example@gmail.com"
                  className="h-10 w-full rounded bg-transparent pl-10 outline-none ring-1 ring-zinc-400 dark:ring-gray-500"
                />
                <span className="absolute left-2 top-2">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="inline-block w-6"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-zinc-700 dark:fill-zinc-300"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2 10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2H14C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V10ZM7.73867 16.4465C8.96118 15.5085 10.4591 15 12 15C13.5409 15 15.0388 15.5085 16.2613 16.4465C17.4838 17.3846 18.3627 18.6998 18.7615 20.1883C18.9044 20.7217 18.5878 21.2701 18.0544 21.413C17.5209 21.556 16.9726 21.2394 16.8296 20.7059C16.5448 19.6427 15.917 18.7033 15.0438 18.0332C14.1706 17.3632 13.1007 17 12 17C10.8993 17 9.82942 17.3632 8.95619 18.0332C8.08297 18.7033 7.45525 19.6427 7.17037 20.7059C7.02743 21.2394 6.47909 21.556 5.94563 21.413C5.41216 21.2701 5.09558 20.7217 5.23852 20.1883C5.63734 18.6998 6.51616 17.3846 7.73867 16.4465ZM10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9ZM12 5C9.79086 5 8 6.79086 8 9C8 11.2091 9.79086 13 12 13C14.2091 13 16 11.2091 16 9C16 6.79086 14.2091 5 12 5Z"
                    ></path>
                    <rect
                      x="2.5"
                      y="2.5"
                      width="19"
                      height="19"
                      rx="3.5"
                      stroke="#000000"
                    ></rect>
                  </svg>
                </span>
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label htmlFor="pass" className="block">
                Password
              </label>
              <div className="relative">
                <input
                  id="pass"
                  autoComplete="off"
                  className="h-10 w-full rounded bg-transparent pl-10 outline-none ring-1 ring-zinc-400 dark:ring-gray-500"
                  placeholder=".............."
                  name="password"
                  type="password"
                />
                <span className="absolute left-2 top-2">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="inline-block w-6"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-zinc-700 dark:fill-zinc-300"
                      d="M20.9098 11.1203V6.73031C20.9098 5.91031 20.2898 4.98031 19.5198 4.67031L13.9498 2.39031C12.6998 1.88031 11.2898 1.88031 10.0398 2.39031L4.46984 4.67031C3.70984 4.98031 3.08984 5.91031 3.08984 6.73031V11.1203C3.08984 16.0103 6.63984 20.5903 11.4898 21.9303C11.8198 22.0203 12.1798 22.0203 12.5098 21.9303C17.3598 20.5903 20.9098 16.0103 20.9098 11.1203ZM12.7498 12.8703V15.5003C12.7498 15.9103 12.4098 16.2503 11.9998 16.2503C11.5898 16.2503 11.2498 15.9103 11.2498 15.5003V12.8703C10.2398 12.5503 9.49984 11.6103 9.49984 10.5003C9.49984 9.12031 10.6198 8.00031 11.9998 8.00031C13.3798 8.00031 14.4998 9.12031 14.4998 10.5003C14.4998 11.6203 13.7598 12.5503 12.7498 12.8703Z"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button className="w-full rounded-lg bg-gradient-to-r from-[#FBDA5F] via-[#FBCB45] to-[#FBA02F] px-5 py-3 text-black font-semibold">
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="mt-6 flex items-center">
          <hr className="flex-1 border-gray-300 dark:border-zinc-600" />
          <span className="mx-4 text-sm text-gray-500 dark:text-zinc-400">
            OR
          </span>
          <hr className="flex-1 border-gray-300 dark:border-zinc-600" />
        </div>

        {/* Google Login */}
        <button
          onClick={handelGoogleLogin}
          className="mt-6 flex w-full items-center justify-center rounded-lg border border-gray-300 px-5 py-3 shadow-md hover:bg-gray-50 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="mr-3 h-5 w-5"
          >
            <path
              fill="currentColor"
              d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"
            />
          </svg>
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
