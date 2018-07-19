import fetch from "node-fetch";
import { resolve } from "path";

export default code => {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:3000", {
      method: "POST",
      body: JSON.stringify({ code })
    })
      .then(response => {
        return response.json().then(json => {
          return response.ok ? resolve(json) : reject(json);
        });
      })
      .catch(error =>
        reject({
          networkError: error.message
        })
      );
  });
};
