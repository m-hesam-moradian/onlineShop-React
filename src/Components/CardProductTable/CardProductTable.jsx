import React from "react";
import "./CardProductTable.css";
export default function CardProductTable() {
  return (
    <div>
      <table class="table">
        <thead>
          <tr className="">
            <th scope="col " class="text-center">
              
            </th>
            <th scope="col" class="text-center">
              First
            </th>
            <th scope="col" class="text-center">
              Last
            </th>
            <th scope="col" class="text-center">
              Handle
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" class="text-center">1</th>
            <td class="text-center">Mark</td>
            <td class="text-center">Otto</td>
            <td class="text-center">@mdo</td>
          </tr>
3
        </tbody>
      </table>
    </div>
  );
}
