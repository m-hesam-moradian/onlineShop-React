import { API } from "../../App";

async function Post(subUrl, data) {
  const response = await fetch(API + subUrl, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const resData = await response.json();
  return resData;
}

export default Post;
