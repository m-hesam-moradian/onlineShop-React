import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Put from "../../../HOC/API/Put";
import { useState } from "react";
import { FetchGet } from "../../../HOC/API/FetchUpdate";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  border: "none",
  backdropFilter: "blur(3px)",
  background: "transparent",
};


export function ModalInput(value, setState, placeholder, tagName) {
  return (
    <input
      value={value}
      onChange={(input) => setState(input.target.value)}
      placeholder={placeholder}
      type="text"
      name={tagName}
      id={tagName}
      autocomplete={tagName}
      class=" text-white block  w-full r border-b-2 bg-transparent border-b-gray-300 py-1.5 placeholder-gray-300 focus:border-b-white focus:placeholder-gray-100 "
    />
  );
}

export default function AdminModal({
  handleClose,
  open,
  EditData,
  setData,
  setOpen,
}) {
  const [name, setName] = useState(EditData.name);
  const [model, setModel] = useState(EditData.model);
  const [price, setPrice] = useState(EditData.price);
  const [link, setLink] = useState(EditData.img);
  const [category, setCategory] = useState(EditData.category);

  const putProduct = () => {
    if (name && model && price && link && category) {
      let obj = {
        id: EditData.id,
        category: category,
        img: link,
        model: model,
        name: name,
        price: Number(price),
      };

      FetchGet(EditData.id, obj, "products", setData, setOpen);
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form>
            <div class="space-y-12 ">
              <div class="text-white  border-0 grid grid-cols-1 gap-5 ">
                <span className="text-3xl font-semibold text-admin-hover">
                  محصول مورد نظر را ویرایش کنید
                </span>
                <input
                  value={name}
                  onChange={(input) => setName(input.target.value)}
                  placeholder="نام محصول"
                  type="text"
                  name="name"
                  id="name"
                  autocomplete="name"
                  class=" text-white block  w-full r border-b-2 bg-transparent border-b-gray-300 py-1.5 placeholder-gray-300 focus:border-b-white focus:placeholder-gray-100 "
                />
              
                <input
                  value={model}
                  onChange={(input) => setModel(input.target.value)}
                  placeholder=" مدل محصول"
                  type="text"
                  name="model"
                  id="model"
                  autocomplete="model"
                  class=" text-white block  w-full r border-b-2 bg-transparent border-b-gray-300 py-1.5 placeholder-gray-300 focus:border-b-white focus:placeholder-gray-100 "
                />
                <input
                  value={price}
                  onChange={(input) => setPrice(input.target.value)}
                  placeholder="قیمت محصول"
                  type="text"
                  name="price"
                  id="price"
                  autocomplete="price"
                  class=" text-white block  w-full r border-b-2 bg-transparent border-b-gray-300 py-1.5 placeholder-gray-300 focus:border-b-white focus:placeholder-gray-100 "
                />
                <input
                  placeholder="(در صورت موجود) لینک تصویر محصول"
                  value={link}
                  onChange={(input) => setLink(input.target.value)}
                  id="link"
                  name="link"
                  autocomplete="link"
                  class=" text-white block  w-full r border-b-2 bg-transparent border-b-gray-300 py-1.5 placeholder-gray-300 focus:border-b-white focus:placeholder-gray-100 "
                />

                <select
                  placeholder="
                    دسته بندی محصول
                  
                  "
                  value={category}
                  onChange={(input) => {
                    setCategory(input.target.value);
                  }}
                  id="category"
                  name="category"
                  autocomplete="category-name"
                  class="  text-white block  w-full r border-b-2 bg-transparent border-b-gray-300 py-1.5 placeholder-gray-300 focus:border-b-white focus:placeholder-gray-100 "
                >
                  <option className="text-black">Headphones</option>
                  <option className="text-black">DigitalProduct</option>
                  <option className="text-black">NetworkTools</option>
                  <option className="text-black">MemoryCard</option>
                  <option className="text-black">PcAndAccessories</option>
                </select>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    putProduct(name, model, price, link, category);
                  }}
                  type="submit"
                  class=" w-full rounded-md bg-admin-text shadow-md text-lg  px-3 py-2  font-semibold text-admin-hover duration-200 hover:shadow-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
