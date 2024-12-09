import React from "react";

const Benefit = () => {
  return (
    <section className="py-16 px-4 bg-gray-100 dark:bg-gray-800 lg:px-20 md:px-14">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center space-x-10">
        {/* Left Side: Image */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-employee-benefits-illustration_23-2149538426.jpg" 
            alt="Benefit Image"
            className="w-full h-[70vh] object-cover rounded-lg"
          />
        </div>

        {/* Right Side: Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">
            The <span className="bg-webMain px-3">Benefits</span> of Our Service
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Our service provides an excellent opportunity for growth and
            learning. Experience the benefits that will take your skills to the
            next level.
          </p>

          <ul className="space-y-4 text-left text-gray-700 dark:text-gray-200">
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="w-6 h-6 text-green-500 mr-3"
              >
                <path
                  fill="currentColor"
                  d="M12 0C5.372 0 0 5.372 0 12C0 18.628 5.372 24 12 24C18.628 24 24 18.628 24 12C24 5.372 18.628 0 12 0ZM11 17H13V11H11V17ZM11 7H13V9H11V7Z"
                />
              </svg>
              <span>Improve your skills with real-world applications.</span>
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="w-6 h-6 text-green-500 mr-3"
              >
                <path
                  fill="currentColor"
                  d="M12 0C5.372 0 0 5.372 0 12C0 18.628 5.372 24 12 24C18.628 24 24 18.628 24 12C24 5.372 18.628 0 12 0ZM11 17H13V11H11V17ZM11 7H13V9H11V7Z"
                />
              </svg>
              <span>Access exclusive resources and tutorials.</span>
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="w-6 h-6 text-green-500 mr-3"
              >
                <path
                  fill="currentColor"
                  d="M12 0C5.372 0 0 5.372 0 12C0 18.628 5.372 24 12 24C18.628 24 24 18.628 24 12C24 5.372 18.628 0 12 0ZM11 17H13V11H11V17ZM11 7H13V9H11V7Z"
                />
              </svg>
              <span>Get certified and boost your career opportunities.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Benefit;
