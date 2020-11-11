import axios from "axios";
import config from "./config.json";

const aPIKey = config.aPIKey;

const client = axios.create({
  baseURL: `https://outside-in-dev-api.herokuapp.com/${aPIKey}`,
});

const api = {
  loadRestaurants() {
    return client.get("/restaurants").then((response) => response.data);
  },
};

export default api;
