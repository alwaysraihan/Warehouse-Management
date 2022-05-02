import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Slider from "../slider/Slider";

const Inventory = () => {
  const { id } = useParams();
  const [inventoryItem, setEnventoryItem] = useState([]);
  const [stockNumber, setStockNumber] = useState({
    stock: "",
  });
  let name, value;
  const getUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setStockNumber({ ...stockNumber, [name]: value });
    e.preventDefault();
  };
  const [newData, setNewData] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const loadData = async () => {
      try {
        const url = `http://localhost:5000/manage-inventory?_id=${id}`;
        const { data } = await axios.get(url);
        setEnventoryItem(data);
      } catch (err) {
        console.error(err);
      }
    };
    loadData();
  }, [id, newData]);

  const updateQuantity = async (id, quantity) => {
    const getQuantity = parseInt(quantity) - 1;
    const newQuantity = {
      quantity: getQuantity.toString(),
    };

    // send data to the monogod server and update
    const url = `http://localhost:5000/inventory-items/${id}`;
    await axios.put(url, newQuantity).then((response) => {
      const { data } = response;
      if (data) {
        setNewData(!newData);
      }
    });
  };
  const updateStock = async (id, quantity) => {
    const { stock } = stockNumber;
    if (stock === "") {
      return toast("Please input stock number");
    } else {
      const getQuantity = parseInt(quantity) + parseInt(stock);
      console.log(stock);
      const newQuantity = {
        quantity: getQuantity.toString(),
      };

      // send data to the monogod server and update
      const url = `http://localhost:5000/inventory-items/${id}`;
      await axios.put(url, newQuantity).then((response) => {
        const { data } = response;
        if (data) {
          setNewData(!newData);
        }
      });
    }
  };

  return (
    <>
      <div className="flex relative lg:static">
        <div className="sticky top-0 bg-[rgb(0,7,61)] h-[100vh]">
          <div className="absolute  top-0 left-0 h-full lg:static">
            <Slider />
          </div>
        </div>
        <div className="ml-[52px] lg:ml-0 w-full">
          <div>
            <div className=" px-4 sm:px-8">
              <div className="py-8">
                <div>
                  <h2 className="text-2xl font-semibold leading-tight">
                    Manage Inventory
                  </h2>
                </div>
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                  <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                    <table className="min-w-full leading-normal">
                      <thead>
                        <tr>
                          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Product Info
                          </th>
                          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Price
                          </th>
                          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Dealer Info
                          </th>
                          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Stock Manage
                          </th>
                          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                        </tr>
                      </thead>
                      {inventoryItem.map((item) => (
                        <tbody key={item._id}>
                          <tr>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 w-10 h-10">
                                  <img
                                    className="w-full h-full rounded-full"
                                    src={item.img}
                                    alt=""
                                  />
                                </div>
                                <div className="ml-3">
                                  <p className="font-semibold whitespace-no-wrap">
                                    {item.name}
                                  </p>
                                  <p className="text-gray-600 whitespace-no-wrap">
                                    id: {item._id}
                                  </p>

                                  <p className="text-gray-600 whitespace-no-wrap">
                                    Abailable:{item.quantity} in stock.
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                $ {item.price}
                              </p>
                              <p className="text-gray-600 whitespace-no-wrap">
                                USD
                              </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {item.suplierName}
                              </p>
                              <p className="text-gray-600 whitespace-no-wrap">
                                {parseInt(item.quantity) === 0
                                  ? "Sold out"
                                  : "Sold Abailable"}
                              </p>
                            </td>

                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <button
                                onClick={() => {
                                  if (parseInt(item.quantity) <= 0) {
                                    toast("No Items In stock");
                                  } else {
                                    updateQuantity(item._id, item.quantity);
                                  }
                                }}
                                className="block  bg-teal-500 hover:bg-teal-600 text-white border-2 border-teal-500 hover:border-teal-600 px-3 py-2 rounded uppercase font-poppins font-medium"
                              >
                                {parseInt(item.quantity) <= 0
                                  ? "Sold Out"
                                  : "Delivered"}
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      ))}
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className=" md:px-5  lg:px-[5%] xl:px-[20%] mx-auto overflow-x-auto  ">
              {inventoryItem.map((inventory) => (
                <form
                  key={inventory._id}
                  action=""
                  className="inline-block p-4  w-full shadow-lg rounded-lg overflow-hidden"
                >
                  <div className="mb-4">
                    <div>
                      <h1 className="mt-3 text-2xl text-center font-semibold ">
                        Product Information
                      </h1>
                      <div className="flex my-5 lg:my-0 justify-between px-[2%] items-center">
                        <div>
                          <img src={inventory.img} alt="product" />
                        </div>

                        <div>
                          <p className="text-xl mb-1 font-thin">
                            {inventory.name}
                          </p>
                          <p className="text-xs lg:text-sm">
                            ID: {inventory._id}
                          </p>
                          <p className="text-gray-500 font-bold ">
                            Abailable: {inventory.quantity} in stock
                          </p>
                        </div>
                        <div className="hidden md:block">
                          <p className="text-sm 2xl:text-xl mb-1 font-bold">
                            Dealer: {inventory.suplierName}
                          </p>
                          <p className="text-gray-500 font-bold ">
                            Price:$ {inventory.price} in stock
                          </p>
                        </div>
                      </div>
                    </div>
                    <label
                      className="block text-gray-700 font-thin mb-2 uppercase"
                      htmlFor="stock"
                    >
                      Stock Iport
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="stock"
                      type="number"
                      placeholder="Enter imported stock number"
                      name="stock"
                      value={stockNumber.stock}
                      onChange={getUserData}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      onClick={() =>
                        updateStock(inventory._id, inventory.quantity)
                      }
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Update Stock
                    </button>
                  </div>
                </form>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inventory;
