import React from "react";
import { AddProductForm } from "../../../Components/Admin/ManageProduct/AddProductForm.jsx";
import UsersTable from "../../../Components/Admin/AdminSidebar/ManageUsers/UsersTable.jsx";

export const Users = () => {
  return (
    <div className="mt-44 md:m-0">
      <UsersTable />
      <AddProductForm />
    </div>
  );
};
