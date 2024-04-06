import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { FetchGet } from "../../../../HOC/API/FetchUpdate";
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

export default function UserModal({
  handleClose,
  open,
  EditData,
  setData,
  setOpen,
}) {
  const [Name, setName] = useState(EditData.Name);
  const [email, setemail] = useState(EditData.email);
  const [link, setLink] = useState(EditData.img);
  const [seniority, setseniority] = useState(EditData.seniority);

  const putProduct = () => {
    if ((Name, email, link, seniority)) {
      let obj = {
        id: EditData.id,
        seniority: seniority,
        img: link,
        Name: Name,
        email: email,
      };

      FetchGet(EditData.id, obj, "registered", setData, setOpen);
    }
    setOpen(false);
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
                  کاربر مورد نظر را ویرایش کنید
                </span>
                <input
                  value={Name}
                  onChange={(input) => setName(input.target.value)}
                  placeholder="نام کاربر"
                  type="text"
                  name="name"
                  id="name"
                  autocomplete="name"
                  class=" text-white block  w-full r border-b-2 bg-transparent border-b-gray-300 py-1.5 placeholder-gray-300 focus:border-b-white focus:placeholder-gray-100 "
                />

                <input
                  value={email}
                  onChange={(input) => setemail(input.target.value)}
                  placeholder="ایمیل"
                  type="text"
                  name="email"
                  id="email"
                  autocomplete="email"
                  class=" text-white block  w-full r border-b-2 bg-transparent border-b-gray-300 py-1.5 placeholder-gray-300 focus:border-b-white focus:placeholder-gray-100 "
                />
                <input
                  placeholder="(در صورت موجود) لینک تصویر کاربر"
                  value={link}
                  onChange={(input) => setLink(input.target.value)}
                  id="link"
                  name="link"
                  autocomplete="link"
                  class=" text-white block  w-full r border-b-2 bg-transparent border-b-gray-300 py-1.5 placeholder-gray-300 focus:border-b-white focus:placeholder-gray-100 "
                />
                <input
                  placeholder="سمت"
                  value={seniority}
                  onChange={(input) => setseniority(input.target.value)}
                  id="link"
                  name="link"
                  autocomplete="link"
                  class=" text-white block  w-full r border-b-2 bg-transparent border-b-gray-300 py-1.5 placeholder-gray-300 focus:border-b-white focus:placeholder-gray-100 "
                />

                {/* <select
                  placeholder="
                    دسته بندی محصول
                  
                  "
                  value={seniority}
                  onChange={(input) => {
                    setseniority(input.target.value);
                  }}
                  id="seniority"
                  name="seniority"
                  autocomplete="seniority-name"
                  class="  text-white block  w-full r border-b-2 bg-transparent border-b-gray-300 py-1.5 placeholder-gray-300 focus:border-b-white focus:placeholder-gray-100 "
                >
                  <option className="text-black">Headphones</option>
                  <option className="text-black">DigitalProduct</option>
                  <option className="text-black">NetworkTools</option>
                  <option className="text-black">MemoryCard</option>
                  <option className="text-black">PcAndAccessories</option>
                </select> */}

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    putProduct(Name, email, link, seniority);
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
