import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div
        className="relative -z-0 h-[50vh] w-full flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://mecaluxcom.cdnwm.com/case-studies/pallet-racking-drive-in-racking-caromar-warehouse.1.12.jpg)",
        }}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75"></div>

        <main className="px-4 sm:px-6 lg:px-8 z-20 ">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl tracking-tight leading-10 font-medium sm:text-5xl uppercase text-white sm:leading-none ">
              <span className="text-pink-400 font-bold">Perfume</span> Warehouse
            </h2>
            <p className="mt-3 text-white  sm:max-w-xl sm:mx-auto md:mt-5">
              Best perfume warehouse with many cool featuers. Manage your stock
              perfume online.
            </p>
            <div className="mt-3 md:mt-8 sm:flex justify-center">
              <div className="rounded-md shadow">
                <Link
                  to="/"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-regular rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:px-10"
                >
                  Get started
                </Link>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Link
                  to="/"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-regular rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:px-10"
                >
                  Live demo
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Banner;
