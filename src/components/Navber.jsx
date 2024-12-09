import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";

const Navber = () => {
  const { user, handelLogout } = useContext(AuthContext);
  const handelLogoutUser = () => {
    handelLogout().then(() => {
      console.log("User logged out successfully");
    });
  };
  return (
      <nav className="bg-gradient-to-r from-[#FBDA5F] via-[#FBCB45]
     to-[#FBA02F] flex py-5 lg:px-24 items-center justify-between px-2 mx-auto">
      <Link to={"/"} className="text-2xl font-semibold dark:text-white font-rancho">
        NotePad
      </Link>
      <ul className="flex items-center justify-between gap-4 text-slate-900 dark:text-gray-100 lg:gap-6">
        {user ? (
          <li className="hover:underline">
            <Link to="/add-node">Add Note</Link>
          </li>
        ) : (
          ""
        )}
        {user ? (
          <li className="hover:underline">
            <Link to="/view-all">View Note</Link>
          </li>
        ) : (
          ""
        )}
        <li className="hover:underline">
          {user ? (
            <button onClick={handelLogoutUser}>Logout</button>
          ) : (
            <Link to="/login" className="font-bold">Login</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navber;
