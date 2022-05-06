import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-2 bg-gray-800 pt-6 md:pt-12 z-10">
        <div className="container px-4 mx-auto">
          <div className="md:flex md:flex-wrap md:-mx-4 py-6 md:pb-12">
            <div className="footer-info lg:w-1/3 md:px-4">
              <img src="https://i.ibb.co/DzYH0zC/image.png" alt="logo" />

              <div className="mt-1">
                <button className="bg-facebook py-2 px-4 text-white rounded mt-2 transition-colors duration-300">
                  <span className="fab fa-facebook-f mr-2"></span> Follow
                </button>
                <button className="bg-twitter py-2 px-4 text-white rounded ml-2 mt-2 transition-colors duration-300">
                  <span className="fab fa-twitter mr-2"></span> Follow
                  @perfume29
                </button>
              </div>
            </div>

            <div className="md:w-2/3 lg:w-1/3 md:px-4 xl:pl-16 mt-12 lg:mt-0">
              <div className="sm:flex">
                <div className="sm:flex-1">
                  <h6 className="text-base font-medium text-white uppercase mb-2">
                    Main Menu
                  </h6>
                  <div>
                    <Link
                      to="/"
                      className="text-gray-400 py-1 block hover:underline"
                    >
                      Inventoy Item's
                    </Link>
                    <Link
                      to="/"
                      className="text-gray-400 py-1 block hover:underline"
                    >
                      Demo
                    </Link>
                    <Link
                      to="/"
                      className="text-gray-400 py-1 block hover:underline"
                    >
                      Priceing
                    </Link>
                    <Link
                      to="/"
                      className="text-gray-400 py-1 block hover:underline"
                    >
                      Video
                    </Link>
                  </div>
                </div>
                <div className="sm:flex-1 mt-4 sm:mt-0">
                  <h6 className="text-base font-medium text-white uppercase mb-2">
                    Quick View
                  </h6>
                  <div>
                    <Link
                      to="/"
                      className="text-gray-400 py-1 block hover:underline"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      to="/"
                      className="text-gray-400 py-1 block hover:underline"
                    >
                      About Us
                    </Link>
                    <Link
                      to="/"
                      className="text-gray-400 py-1 block hover:underline"
                    >
                      Terms Of Service
                    </Link>
                    <Link
                      to="/"
                      className="text-gray-400 py-1 block hover:underline"
                    >
                      Blog
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/3 md:px-4 md:text-left mt-12 lg:mt-0">
              <div className="sm:flex">
                <div className="sm:flex-1">
                  <h6 className="text-base font-medium text-white uppercase mb-2">
                    Link
                  </h6>
                  <div>
                    <Link
                      to="/"
                      className="text-gray-400 py-1 block hover:underline"
                    >
                      About
                    </Link>
                    <Link
                      to="/"
                      className="text-gray-400 py-1 block hover:underline"
                    >
                      Contact
                    </Link>
                    <Link
                      to="/"
                      className="text-gray-400 py-1 block hover:underline"
                    >
                      FAQ
                    </Link>
                    <Link
                      to="/"
                      className="text-gray-400 py-1 block hover:underline"
                    >
                      Wishlist
                    </Link>
                  </div>
                </div>
                <div className="sm:flex-1 mt-4 sm:mt-0">
                  <h6 className="text-base font-medium text-white uppercase mb-2">
                    Warehouse info
                  </h6>
                  <div>
                    <Link
                      to="/"
                      className="text-gray-400 py-1 block hover:underline"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      to="/"
                      className="text-gray-400 py-1 block hover:underline"
                    >
                      About Us
                    </Link>
                    <Link
                      to="/"
                      className="text-gray-400 py-1 block hover:underline"
                    >
                      Terms Of Service
                    </Link>
                    <Link
                      to="/"
                      className="text-gray-400 py-1 block hover:underline"
                    >
                      Blog
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-solid border-gray-900 mt-4 py-4">
          <div className="container px-4 mx-auto">
            <div className="md:flex md:-mx-4 md:items-center">
              <div className="md:flex-1 md:px-4 text-center md:text-left">
                <p className="text-white">
                  &copy; 2022 BY THE
                  <strong>
                    <span className="text-pink-400"> PERFUME </span>WAREHOUSE
                  </strong>
                </p>
              </div>
              <div className="md:flex-1 md:px-4 text-center md:text-right">
                <Link
                  to="/"
                  className="py-2 px-4 text-white inline-block hover:underline"
                >
                  Terms of Service
                </Link>
                <Link
                  to="/"
                  className="py-2 px-4 text-white inline-block hover:underline"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
