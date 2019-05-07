import axios from "axios";

const api = axios.create({
  baseURL: "http://adesaovacinacaoapi.sesisc.org.br/"
});

export default api;
