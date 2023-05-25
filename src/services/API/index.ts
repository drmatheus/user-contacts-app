import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 5000,
});

export const pokeapi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon/ditto",
  timeout: 5000,
});
