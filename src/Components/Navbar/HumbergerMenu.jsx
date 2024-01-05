import React, { useState } from "react";
import { NavLinks } from "./NavLinks/NavLinks";
import { Button, Offcanvas } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function HumbergerMenu({ name, ProductArray, ...props }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [searchResult, setsearchResult] = useState([]);

  const navigate = useNavigate();

  return (
    <>
      <Button
        onClick={handleShow}
        className="d-flex d-md-none align-items-center bg-transparent border-0 text-black btn-outline-secondary  "
      >
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="d-flex justify-content-center p-4  ">
            <img
              src="https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/logomain.png"
              className="w-50"
              alt="لوگوی سبزلرن"
            />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <form className="searchForm w-100 bg-light border-0  " action="">
            <input
              type="text"
              className="searchInput bg-transparent "
              placeholder="جستجوی محصولات"
              onChange={(event) => {
                let result = ProductArray.filter((product) =>
                  product.name
                    .toUpperCase()
                    .includes(event.target.value.toUpperCase())
                );
                if (!event.target.value) {
                  result = [];
                }
                setsearchResult(result);
              }}
            />

            <button
              href=""
              className="searchBTN bg-transparent"
              aria-label="search submit"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <i className="fas fa-search"></i>
            </button>
            <ul className="searchList rounded-4 d-grid gap-3">
              {searchResult &&
                searchResult.map((event) => (
                  <a
                    onClick={() => navigate(`/products/${event.id}`)}
                    href=""
                    className=" searchListItem"
                  >
                    <img src={event.img} alt="" />
                    <span>{event.name}</span>
                  </a>
                ))}
            </ul>
          </form>

          <ul className="navbar-nav justify-content-end flex-grow-1 p-4 text-secondary ">
            <NavLinks />
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
