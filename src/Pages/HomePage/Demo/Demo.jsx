import React from "react";

const Demo = () => {
  return (
    <>
      <div className="bg-gray-50 px-5 md:px-[10] lg:px-[10%] xl:px-[15%] py-20 ">
        <div>
          <h2 className="text-xl mb-3 md:mb-5   text-gray-600 md:text-2xl lg:text-3xl xl:text-4xl  tracking-tight leading-10 font-semibold  text-center sm:leading-none ">
            Managing inventory can be hard. We fixed it – it's easy now.
          </h2>
          <h3 className="text-sm mb-3 md:mb-5 font-serif md:text-xl lg:text-2xl xl:text-3xl text-gray-500 text-center">
            Our fresh approach provides the easiest full featured inventory
            solution on the market.
          </h3>
        </div>
        <div className="mt-10">
          <img
            className="rounded-lg"
            src="https://i.ibb.co/tzLczRd/1s.png"
            alt="demo"
          />
        </div>
      </div>
    </>
  );
};

export default Demo;
