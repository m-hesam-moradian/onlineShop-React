import { API } from "../../App";

async function Delete(subUrl) {
  const response = await fetch(API + subUrl, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  });

  const resData = await response.json();
  return resData;
}

export default Delete;
