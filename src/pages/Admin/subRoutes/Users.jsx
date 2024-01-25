import React from "react";
import UsersTable from "../../../Components/Admin/AdminSidebar/ManageUsers/UsersTable.jsx";
import { AddUserForm } from "../../../Components/Admin/AdminSidebar/ManageUsers/AddUserForm.jsx";

export const Users = () => {
  return (
    <div className="mt-44 md:m-0">
      <UsersTable />
      <AddUserForm />
    </div>
  );
};
