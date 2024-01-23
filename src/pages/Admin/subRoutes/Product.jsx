import React, { useEffect, useState } from "react";
import { API } from "../../../App";

import AdminTable from "./AdminTable.jsx";
import { AddProductForm } from "./AddProductForm.jsx";

export const Product = () => {
  const [tableData, setTableData] = useState();
  useEffect(() => {
    fetch(`${API}products`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then(async (allData) => {
        setTableData(allData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    window.scrollTo(0, 0);
  }, []);
  console.log(tableData);

  return (
    <div className="mt-44 md:m-0">
      <AdminTable tableData={tableData && tableData} />
      <AddProductForm/>
    </div>
  );
};
