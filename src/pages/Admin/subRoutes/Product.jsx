import React from "react";
import AdminTable from "./AdminTable.jsx";
import { AddProductForm } from "./AddProductForm.jsx";

export const Product = () => {
  return (
    <div className="mt-44 md:m-0">
      <AdminTable />
      <AddProductForm />

    </div>
  );
};
