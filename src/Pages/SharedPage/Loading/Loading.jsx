import React from "react";

const Loading = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
        <div
          className="spinner-border animate-spin inline-block text-teal-600 mb-10 w-14 h-14 border-6 rounded-full"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        <h2 className="text-center text-white text-xl font-semibold">
          Loading...
        </h2>
        <p className=" xl:w-1/3 text-center text-white">
          This may take a few seconds, please don't close this page.
        </p>
      </div>
    </>
  );
};

export default Loading;
