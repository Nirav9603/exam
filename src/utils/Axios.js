import axios from "axios";

// Axios Get Api

export const Api = axios.create({
        baseURL: "https://jsonplaceholder.typicode.com/"
    });

export async function get(url, config = {}) {
    return await Api
      .get(url, { ...config })
      .then((response) => response.data);
  }