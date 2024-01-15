import React, { Children } from "react";

export const ContactUsInfoCart = (Children, { title }) => {
  // console.log(Children);
  return (
    <div class="ContactUsWaysToRichUsCard card col d-grid gap-4 p-5 border-0  align-items-center  shadow rounded-bottom-5  m-5">
      <div className="d-grid justify-content-center "></div>
      {Children}
      <div class="card-body gap-3 d-grid justify-content-center jic ">
        <h5 class="card-title fs-3 fw-bold px-5">{title}</h5>
        <h6 class="card-subtitle mb-2 text-muted fs-5">مدیریت: 03512345678</h6>
        <h6 class="card-subtitle mb-2 text-muted fs-5">
          پشتیبانی: 03539876543
        </h6>
      </div>
    </div>
  );
};
