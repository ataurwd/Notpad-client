import React from "react";
import '../index.css'

const HomeHeading = () => {
  return (
    <div className="h-[80vh] flex flex-col justify-center items-center space-y-4">
      <h1 className="cssanimation hu__hu__ lg:text-7xl font-rancho my-5">Welcome To My Website</h1>
      <p className="w-1/2 mx-auto text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        aliquid expedita ipsum. Sit, aspernatur accusamus magnam, maiores
        reiciendis veniam quia reprehenderit at cum dolore, impedit dolores.
        Aperiam ut unde illo obcaecati veniam, magni ratione, libero alias
        quibusdam ullam, commodi doloremque molestiae. Quod sint esse,
        perferendis aperiam est vitae? Quisquam, nemo.
      </p>
      <div className="space-x-5">
        <button className="border-2 px-5 py-1 rounded-md text-black font-semibold">Add Note</button>
        <button className="bg-webMain px-5 py-[6px]  rounded-md font-semibold">View Note Details</button>
      </div>
    </div>
  );
};

export default HomeHeading;
