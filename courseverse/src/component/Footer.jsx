import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between mx-2">
        <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
          <h4 className="text-lg font-bold mb-4">Course Verse</h4>
          <p className="mb-4">
            A learning platform for web development and data analysis
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-white hover:text-gray-500 transition-colors duration-300"
            >
              <i className="fab fa-facebook-square fa-lg"></i>
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-500 transition-colors duration-300"
            >
              <i className="fab fa-twitter-square fa-lg"></i>
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-500 transition-colors duration-300"
            >
              <i className="fab fa-instagram-square fa-lg"></i>
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
          <h4 className="text-lg font-bold mb-4">Links</h4>
          <ul className="list-none">
            <li className="mb-2">
              <a
                href="#"
                className="hover:text-gray-500 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="hover:text-gray-500 transition-colors duration-300"
              >
                Courses
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="hover:text-gray-500 transition-colors duration-300"
              >
                Blog
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="hover:text-gray-500 transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="hover:text-gray-500 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
          <h4 className="text-lg font-bold mb-4">Courses</h4>
          <ul className="list-none">
            <li className="mb-2">
              <a
                href="#"
                className="hover:text-gray-500 transition-colors duration-300"
              >
                Web Development
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="hover:text-gray-500 transition-colors duration-300"
              >
                Data Analysis
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="hover:text-gray-500 transition-colors duration-300"
              >
                Database Management
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="hover:text-gray-500 transition-colors duration-300"
              >
                Software Engineering
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="hover:text-gray-500 transition-colors duration-300"
              >
                Machine Learning
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
          <h4 className="text-lg font-bold mb-4">Contact Us</h4>
          <p className="mb-4">
            Feel free to get in touch with us via phone or email:
          </p>
          <ul className="list-none">
            <li className="mb-2">
              <i className="fas fa-phone mr-2"></i>1-800-123-4567
            </li>
            <li className="mb-2">
              <i className="fas fa-envelope mr-2"></i>contact@courseverse.com
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 mt-8 text-center mx-2">
        <p>&copy; 2023 Course Verse. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
