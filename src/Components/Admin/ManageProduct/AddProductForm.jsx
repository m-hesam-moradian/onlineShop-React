import React, { useState } from "react";
import Post from "../../../HOC/API/Post";

export const AddProductForm = () => {
  const [name, setName] = useState(null);
  const [model, setModel] = useState(null);
  const [price, setPrice] = useState(null);
  const [link, setLink] = useState(null);
  const [category, setCategory] = useState(null);
  const postProduct = () => {
    if (name && model && price && link && category) {
      let obj = {
        category: category,
        img: link,
        model: model,
        name: name,
        price: price,
      };
      let result = Post("products/", obj);
      console.log(result);
    }
  };

  return (
    <div className="h-full   m-14 mt-0 flex flex-col justify-center ">
      <form>
        <div class="space-y-12 ">
          <div class="border-b text-xl pb-12">
            <h2 class="text-3xl font-semibold leading-7 text-gray-900 mb-4 ">
              اضافه کردن محصول جدید
            </h2>

            <div class=" backdrop-blur-md shadow-inner shadow-gray-500 border-0 grid grid-cols-1 gap-5 sm:grid-cols-3">
              <div class="w-full">
                <label
                  for="name"
                  class="block  font-medium leading-6 text-gray-900"
                >
                  نام محصول
                </label>
                <div class="mt-2">
                  <input
                    value={name}
                    onChange={(input) => setName(input.target.value)}
                    type="text"
                    name="name"
                    id="name"
                    autocomplete="name"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm: sm:leading-6"
                  />
                </div>
              </div>
              <div class="w-full">
                <label
                  for="model"
                  class="block  font-medium leading-6 text-gray-900"
                >
                  مدل محصول
                </label>
                <div class="mt-2">
                  <input
                    value={model}
                    onChange={(input) => setModel(input.target.value)}
                    type="text"
                    name="model"
                    id="model"
                    autocomplete="model"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm: sm:leading-6"
                  />
                </div>
              </div>

              <div class="w-full">
                <label
                  for="price"
                  class="block  font-medium leading-6 text-gray-900"
                >
                  قیمت محصول
                </label>
                <div class="mt-2">
                  <input
                    value={price}
                    onChange={(input) => setPrice(input.target.value)}
                    type="text"
                    name="price"
                    id="price"
                    autocomplete="price"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm: sm:leading-6"
                  />
                </div>
              </div>

              <div class="w-full">
                <label
                  for="link"
                  class="block  font-medium leading-6 text-gray-900"
                >
                  (در صورت موجود) لینک تصویر محصول
                </label>
                <div class="mt-2">
                  <input
                    value={link}
                    onChange={(input) => setLink(input.target.value)}
                    id="link"
                    name="link"
                    autocomplete="link"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm: sm:leading-6"
                  />
                </div>
              </div>

              <div class="w-full">
                <label
                  for="category"
                  class="block  font-medium leading-6 text-gray-900"
                >
                  دسته بندی محصول
                </label>
                <div class="mt-2 ">
                  <select
                    value={category}
                    onChange={(input) => {
                      setCategory(input.target.value);
                    }}
                    id="category"
                    name="category"
                    autocomplete="category-name"
                    class=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm "
                  >
                    <option>Headphones</option>
                    <option>DigitalProduct</option>
                    <option>NetworkTools</option>
                    <option>MemoryCard</option>
                    <option>PcAndAccessories</option>
                  </select>
                </div>
              </div>

              {/* <label
                for="file-upload"
                class=" group w-full relative cursor-pointer rounded-md font-semibold shadow-md  text-lg text-admin-active hover:text-admin-navBG duration-300"
              >
                <span className="  flex   rounded-lg items-center justify-center text-end leading-6  group-hover:bg-admin-active border-admin-active group-hover:border-transparent border-3 border-solid    gap-4 w-full">
                  {" "}
                  <svg
                    class="  w-10  "
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                      clip-rule="evenodd"
                    />
                  </svg>{" "}
                  Upload a file
                </span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  class="sr-only"
                />
              </label> */}

              <button
                onClick={(e) => {
                  e.preventDefault();
                  postProduct(name, model, price, link, category);
                }}
                type="submit"
                class=" w-full rounded-md bg-admin-active shadow-md text-lg  px-3 py-2  font-semibold text-white  hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
