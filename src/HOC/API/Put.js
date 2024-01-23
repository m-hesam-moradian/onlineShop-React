import { API } from "../../App";

async function usePut(subUrl, data) {
  const response = await fetch(API + subUrl, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const resData = await response.json();
  return resData;
}
export default usePut