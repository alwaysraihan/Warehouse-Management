import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const ManageInventory = () => {
  const [inventoryItemes, setEnventoryItems] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/inventory-items`
        );
        setEnventoryItems(data);
      } catch (err) {
        console.error(err);
      }
    };
    loadData();
  }, []);
  const deleteItem = async (id) => {
    const url = `http://localhost:5000/inventory-items/${id}`;
    await axios.delete(url).then((response) => {
      const { data } = response;
      if (data) {
        const remaingProduct = inventoryItemes.filter(
          (item) => item._id !== id
        );
        setEnventoryItems(remaingProduct);
      }
    });
  };
  return (
    <>
      <div className="w-full h-screen bg-gray-100">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="flex flex-col">
            <div className="-mb-2 py-4 flex flex-wrap flex-grow justify-between">
              <div className="flex items-center py-2">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-searcg"
                  type="text"
                  placeholder="Search"
                />
              </div>
              <div className="flex items-center py-2">
                <NavLink
                  to="/dashboard/add-inventory-item"
                  className="inline-block px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline"
                >
                  Create new Items
                </NavLink>
              </div>
            </div>
            <div className="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
              <div className="align-middle inline-block w-full shadow overflow-x-auto sm:rounded-lg border-b border-gray-200">
                <table className="min-w-full table-auto">
                  <thead>
                    <tr className="border-b border-gray-200 font-thin bg-white leading-4 tracking-wider text-base text-gray-500">
                      <th className="px-6 py-5 text-left" colSpan="100%">
                        <p>Manage Inventory</p>
                      </th>
                    </tr>
                    <tr className="bg-gray-50 border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase tracking-wider">
                      <th className="px-6 py-3 text-left font-medium">
                        <input
                          className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                          type="checkbox"
                        />
                      </th>
                      <th className="px-6 py-3 text-center font-medium">
                        Product
                      </th>
                      <th className="px-6 py-3  font-medium text-center">
                        Dealer Info
                      </th>

                      <th className="px-6 py-3 text-center font-medium">
                        Abaility
                      </th>
                      <th className="px-6 py-3 text-center font-medium">
                        price
                      </th>
                      <th className="px-6 py-3 text-center font-medium">
                        Update
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-white">
                    {inventoryItemes.map((item) => (
                      <tr key={item._id}>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <input
                            className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                            type="checkbox"
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="text-sm leading-5 text-gray-900">
                            <div className="flex flex-col items-center  justify-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <img
                                  className="h-10 w-10 rounded-full"
                                  src={item.img}
                                  alt="product"
                                />
                              </div>
                              <div>{item.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="flex flex-col items-center justify-center">
                            <div>
                              <p className="text-left">{item.suplierName}</p>
                            </div>
                            <div className="ml-4">
                              <div>
                                <p className="text-sm text-left leading-5 font-medium text-gray-900">
                                  Abailable: {item.quantity} in stock
                                </p>
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="px-6 text-center py-4 whitespace-no-wrap border-b border-gray-200">
                          <span className="px-2 inline-flex  text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {parseInt(item.quantity) <= 0
                              ? "Out of stock"
                              : "In Stock"}
                          </span>
                        </td>
                        <td className="px-6 text-center py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                          <div className="flex flex-col items-center">
                            <p>$ {item.price}</p>
                            <p>USD</p>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap text-center border-b border-gray-200 text-sm leading-5 font-medium">
                          <div className="flex justify-center items-center">
                            <button
                              onClick={() => deleteItem(item._id)}
                              className="block  bg-teal-500 hover:bg-teal-600 text-white border-2 border-teal-500 hover:border-teal-600 px-3 py-2 rounded uppercase font-poppins font-medium"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageInventory;
