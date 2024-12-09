import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter";

const HowWork = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <section
      className="bg-gradient-to-r from-[#FBDA5F] via-[#FBCB45]
     to-[#FBA02F] py-16"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-14">
          <Typewriter
            words={[
              "How It Works",
            ]}
            loop={5} 
            cursor
            cursorStyle="_"
            typeSpeed={60} 
            deleteSpeed={50} 
            delaySpeed={1000} 
          />
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Step 1 */}
          <div
            className="relative rounded-lg bg-white p-6 shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white w-16 h-16 flex items-center justify-center rounded-full">
              1
            </div>
            <h3 className="text-xl font-semibold mt-6">Create a New Note</h3>
            <p className="text-gray-600 mt-2">
              Click the 'Add Note' button to begin capturing your thoughts.
            </p>
          </div>
          {/* Step 2 */}
          <div
            className="relative rounded-lg bg-white p-6 shadow-lg"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-500 text-white w-16 h-16 flex items-center justify-center rounded-full">
              2
            </div>
            <h3 className="text-xl font-semibold mt-6">Organize Your Notes</h3>
            <p className="text-gray-600 mt-2">
              Categorize and arrange your notes for seamless organization.
            </p>
          </div>
          {/* Step 3 */}
          <div
            className="relative rounded-lg bg-white p-6 shadow-lg"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white w-16 h-16 flex items-center justify-center rounded-full">
              3
            </div>
            <h3 className="text-xl font-semibold mt-6">Edit and Update</h3>
            <p className="text-gray-600 mt-2">
              Make updates or enhance your notes whenever needed.
            </p>
          </div>
          {/* Step 4 */}
          <div
            className="relative rounded-lg bg-white p-6 shadow-lg"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-red-500 text-white w-16 h-16 flex items-center justify-center rounded-full">
              4
            </div>
            <h3 className="text-xl font-semibold mt-6">Access Anytime</h3>
            <p className="text-gray-600 mt-2">
              Enjoy 24/7 access to your notes on any device.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWork;
