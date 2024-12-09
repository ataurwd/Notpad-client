import React from "react";
import '../index.css'
import { Link } from "react-router-dom";

const HomeHeading = () => {
  return (
    <div className="h-[80vh] flex flex-col justify-center items-center space-y-4 bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20210814/pngtree-blue-powder-gradient-color-blur-light-spot-gradient-simple-background-image_760553.jpg')] bg-cover bg-center bg-no-repeat">
      <h1 className="cssanimation hu__hu__ lg:text-7xl font-rancho my-5">Welcome To Our Website</h1>
      <p className="w-1/2 mx-auto text-center">
      Discover how our website works! With user-friendly design and intuitive features, you can easily navigate, add notes, track your learning progress, and save your work. Our platform ensures a smooth experience with seamless interaction and a responsive interface, making learning and note-taking efficient and enjoyable.
      </p>
      <div className="space-x-5">
        <Link to={'/add-node'} className="border-2 border-gray-400 px-5 py-1 rounded-md text-black font-semibold">Add Note</Link>
        <Link to={'/view-all'} className="bg-webMain px-5 py-[6px]  rounded-md font-semibold">View Note Details</Link>
      </div>
    </div>
  );
};

export default HomeHeading;
