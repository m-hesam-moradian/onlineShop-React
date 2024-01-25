import React from "react";
import AdminTable from "../../../Components/Admin/ManageProduct/AdminTable.jsx";
import { AddProductForm } from "../../../Components/Admin/ManageProduct/AddProductForm.jsx";

export const Users = () => {
  return (
    <div className="mt-44 md:m-0">
      <AdminTable />
      <AddProductForm />
    </div>
  );
};
