import { API } from "../../App";

async function Put(subUrl, obj) {
  const response = await fetch(API + subUrl, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  });

  const resData = await response.json();
  return resData;
}
export default Put