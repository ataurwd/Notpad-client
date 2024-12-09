import React from 'react';

const Footer = () => {
    return (
<footer className="bg-gray-800 text-white py-6">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Left Side: Developer's Name */}
          <div>
            <p className="text-lg font-semibold">
              Developed by <span className="text-webMain">Ataur Rahman</span>
            </p>
          </div>

          {/* Right Side: Links */}
          <div>
            <ul className="flex space-x-6">
              <li>
                <a href="#about" className="hover:text-webMain">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-webMain">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-webMain">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="text-center mt-4 text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Rubel Mia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    );
};

export default Footer;