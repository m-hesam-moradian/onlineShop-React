import React, { useEffect, useState } from "react";
import AdminTable from "./AdminTable.jsx";
import { AddProductForm } from "./AddProductForm.jsx";
import Get from "../../../HOC/API/Get.js";
export const Product = () => {
  const { data, loading, error } = Get(`products`);

  if (loading) {
    console.log(loading);
  }

  if (error) {
    console.log(error);
  }

  // console.log(tableData);

  return (
    <div className="mt-44 md:m-0">
      <AdminTable tableData={data && data} />
      <AddProductForm />
    </div>
  );
};
