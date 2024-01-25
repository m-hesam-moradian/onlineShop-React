

export const FetchGet = (id, obj, subRoute, setData, setOpen) => {
  fetch(`http://localhost:3000/${subRoute}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  })
    .then((response) => response.json())
    .then(() => {
      fetch(`http://localhost:3000/${subRoute}/`)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setOpen(false);
        });
    });
};
