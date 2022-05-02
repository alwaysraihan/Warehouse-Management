import React from "react";
import { useForm } from "react-hook-form";

const AddNewStoclItem = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div class="bg-slate-50 text-charcoal min-h-screen font-sans leading-normal overflow-x-hidden lg:overflow-auto">
        <div class="flex-1 md:p-0 lg:pt-8 lg:pb-8 lg:px-8 md:ml-24 flex flex-col">
          <section class="bg-slate-100 p-4 shadow">
            <div class="md:flex">
              <h2 class="md:w-1/3 uppercase tracking-wide text-sm sm:text-lg mb-6">
                Create New Item
              </h2>
            </div>
            <form>
              <div class="md:flex mb-8">
                <div class="md:w-1/3">
                  <legend class="uppercase tracking-wide text-sm">
                    Product Info
                  </legend>
                  <p class="text-xs font-light text-red">
                    All input field is **required**
                  </p>
                </div>
                <div class="md:flex-1 mt-2 mb:mt-0 md:px-3">
                  <div class="mb-4">
                    <label class="block uppercase tracking-wide text-xs font-bold">
                      Product Name
                    </label>

                    <input
                      class="w-full shadow-inner p-4 border-0"
                      type="text"
                      name="name"
                      placeholder="Enter your new product name"
                    />
                  </div>
                  <div class="md:flex mb-4">
                    <div class="md:flex-1 md:pr-3">
                      <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                        Price
                      </label>
                      <input
                        class="w-full shadow-inner p-4 border-0"
                        type="number"
                        name="quantity"
                        placeholder="$ 000"
                      />
                    </div>
                    <div class="md:flex-1 md:pl-3">
                      <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                        Stock Quantity
                      </label>
                      <input
                        class="w-full shadow-inner p-4 border-0"
                        type="number"
                        name="enter product stock"
                        placeholder="0"
                      />
                    </div>
                  </div>
                  <div class="md:flex mb-4">
                    <div class="md:flex-1 md:pr-3">
                      <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                        Product Image URL
                      </label>

                      <input
                        class="w-full shadow-inner p-4 border-0"
                        type="url"
                        name="img"
                        placeholder="https://i.ibb.co/XS2Nz4Y/s2.jpg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="md:flex mb-6">
                <div class="md:w-1/3">
                  <legend class="uppercase tracking-wide text-sm">
                    Product Description
                  </legend>
                  <p class="text-xs font-light text-red">
                    All input field is **required**
                  </p>
                </div>
                <div class="md:flex-1 mt-2 mb:mt-0 md:px-3">
                  <textarea
                    class="w-full shadow-inner p-4 border-0"
                    placeholder="Enter Product Description here............."
                    rows="6"
                  ></textarea>
                </div>
              </div>
              <div class="md:flex mb-8">
                <div class="md:w-1/3">
                  <legend class="uppercase tracking-wide text-sm">
                    Dealer Info
                  </legend>
                  <p class="text-xs font-light text-red">
                    All input field is **required**
                  </p>
                </div>
                <div class="md:flex-1 mt-2 mb:mt-0 md:px-3">
                  <div class="mb-4">
                    <label class="block uppercase tracking-wide text-xs font-bold">
                      Dealer/Suplier Name
                    </label>
                    <input
                      class="w-full shadow-inner p-4 border-0"
                      type="text"
                      name="suplierName"
                      placeholder="Raihan Sarkar"
                    />
                  </div>

                  <div class="mb-4">
                    <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                      Dealer Email Address
                    </label>
                    <input
                      class="w-full shadow-inner p-4 border-0"
                      type="email"
                      name="email"
                      placeholder="perfume.dealer@gmail.com"
                    />
                  </div>
                </div>
              </div>

              <div class="md:flex mb-6 border border-t-1 border-b-0 border-x-0 border-cream-dark">
                <div class="md:flex-1 px-3 text-center md:text-right">
                  <button
                    class="button mt-1 bg-teal-500 hover:bg-teal-600 text-white border-2 border-teal-500 hover:border-teal-600 px-3 py-2 rounded uppercase font-poppins font-medium"
                    type="submit"
                  >
                    Create Item
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
};

export default AddNewStoclItem;
