import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../Firebase/firebase.init";
import axiosSecret from "../../../secretApi/AxiosSecret";

const MyItem = () => {
  const handleSignOut = () => {
    signOut(auth);
  };
  const navigrate = useNavigate();
  const [user] = useAuthState(auth);
  const [inventoryItemes, setEnventoryItems] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      try {
        const email = user.email;
        const url = `http://localhost:5000/my-items?email=${email}`;
        const { data } = await axiosSecret.get(url);
        setEnventoryItems(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          handleSignOut();
          navigrate("/login");
        }
      }
    };
    loadData();
  }, [user]);
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
                <th className="px-6 py-3  text-left font-medium">
                  <input
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                    type="checkbox"
                  />
                </th>
                <th className="px-6 py-3  text-center font-medium">Product</th>
                <th className="px-6 py-3  font-medium text-center">
                  Dealer Info
                </th>

                <th className="px-6 py-3  text-center font-medium">Abaility</th>
                <th className="px-6 py-3  text-center font-medium">price</th>
                <th className="px-6 py-3 text-center font-medium">Update</th>
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
                  <td className="px-6  py-4 whitespace-no-wrap border-b border-gray-200">
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

                  <td className="px-6 text-center  py-4 whitespace-no-wrap border-b border-gray-200">
                    <span className="px-2 inline-flex  text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {parseInt(item.quantity) <= 0
                        ? "Out of stock"
                        : "In Stock"}
                    </span>
                  </td>
                  <td className="px-6 text-center  py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
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
    </>
  );
};

export default MyItem;
