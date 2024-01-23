import React from 'react'

export const AddProductForm = () => {
  return (
    <div className="h-full   m-14 mt-0 flex flex-col justify-center ">
      <form>
        <div class="space-y-12 ">
          <div class="border-b text-xl pb-12">
            <h2 class="text-3xl font-semibold leading-7 text-gray-900 mb-4 ">
              اضافه کردن محصول جدید
            </h2>

            <div class=" shadow-inner shadow-gray-500 border-0 grid grid-cols-1 gap-5 sm:grid-cols-3">
              <div class="w-full">
                <label
                  for="first-name"
                  class="block  font-medium leading-6 text-gray-900"
                >
                  نام محصول
                </label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autocomplete="given-name"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm: sm:leading-6"
                  />
                </div>
              </div>

              <div class="w-full">
                <label
                  for="last-name"
                  class="block  font-medium leading-6 text-gray-900"
                >
                  قیمت محصول
                </label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autocomplete="family-name"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm: sm:leading-6"
                  />
                </div>
              </div>

              <div class="w-full">
                <label
                  for="email"
                  class="block  font-medium leading-6 text-gray-900"
                >
                  تصویر محصول
                </label>
                <div class="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
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

              <label
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
              </label>

              <button
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
}
