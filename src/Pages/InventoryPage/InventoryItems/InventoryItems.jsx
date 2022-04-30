import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Inventory.css";

const InventoryItems = () => {
  const [inventoryItemes, setEnventoryItems] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      try {
        const { data } = await axios.get(
          `https://perfume-warehouse-server.herokuapp.com/inventory-items`
        );
        setEnventoryItems(data);
      } catch (err) {
        console.error(err);
      }
    };
    loadData();
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 xl:gap-10 justify-center items-center min-h-screen bg-gray-100 px-[2%] md:px-[3%] lg:px-[4%] xl:px-[10%]">
        {inventoryItemes.map((item) => (
          <div key={item._id} className="w-full p-2 ">
            <div className="bg-white shadow-lg hover:shadow-xl rounded-lg relative">
              <div
                className="bg-gray-400 h-64 rounded-t-lg p-4 bg-no-repeat bg-center bg-cover"
                style={{
                  backgroundImage: `url(${item.img})`,
                }}
              ></div>
              <div className="flex justify-between items-start px-2 pt-2">
                <div className="p-2 flex-grow">
                  <h1 className="font-medium text-xl font-poppins">
                    {item.name}
                  </h1>
                  <p className="text-gray-500 font-nunito">
                    {item.description.slice(0, 50) + "..."}
                  </p>
                </div>

                <div className="p-2 text-right">
                  <div className="text-teal-500 font-semibold text-center text-lg font-poppins">
                    ${item.price}
                  </div>

                  <div>
                    <div className=" flex justify-center items-center font-semibold text-gray-500 text-center text-sm font-poppins">
                      Price
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex px-4 justify-between items-center">
                <h1 className="text-gray-400 text-sm">{item.suplierName}</h1>
                <h1>
                  <span className="font-bold">Availability: </span>{" "}
                  <span className="text-gray-500">
                    <span>{item.quantity}</span> in stock
                  </span>
                </h1>
              </div>
              <div className="flex justify-center items-center px-2 pb-2">
                <div className="w-1/2 p-2">
                  <button className="block w-full bg-teal-500 hover:bg-teal-600 text-white border-2 border-teal-500 hover:border-teal-600 px-3 py-2 rounded uppercase font-poppins font-medium">
                    <svg viewBox="0 0 24 24" className="inline w-4 h-4">
                      <path
                        fill="currentColor"
                        d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
                      />
                    </svg>{" "}
                    Details
                  </button>
                </div>
                <div className="w-1/2 p-2">
                  <Link
                    to={`/inventory/${item._id}`}
                    className="block text-center cursor-pointerZ bg-white hover:bg-gray-100 text-teal-500 border-2 border-teal-500 px-3 py-2 rounded uppercase font-poppins font-medium"
                  >
                    Update
                  </Link>
                </div>
              </div>
              <div class="ribbon ribbon-top-right">
                <span>
                  {parseInt(item.quantity) === 0 ? "Out of stock" : "In Stock"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default InventoryItems;
