import { API } from "../../App";


export const FetchGet = (id, obj, subRoute, setData, setOpen) => {
  fetch(`${API}${subRoute}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  })
    .then((response) => response.json())
    .then(() => {
      fetch(`${API}${subRoute}/`)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setOpen(false);
        });
    });
};
