import React, { useEffect, useState } from "react";
import { API } from "../../../App";

import AdminTable from "./AdminTable.jsx";
import { AddProductForm } from "./AddProductForm.jsx";
import useGet from "../../../hooks/APIHooks/Get.js";

export const Product = () => {
  const { data, loading, error } = useGet("http://localhost:3000/products");
  if (loading) {
    console.log(loading);
  }

  if (error) {
    console.log(error);
  }

  console.log(data);

  return (
    <div className="mt-44 md:m-0">
      <AdminTable tableData={data} />
      <AddProductForm />
    </div>
  );
};
