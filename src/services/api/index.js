import axios from "axios";

import FormData from "form-data";

const api = axios.create({
  // baseURL: "http://adesaovacinacaoapi.sesisc.org.br/"
  baseURL: "http://adesaovacinacao-api.hml.sesisc.org.br/"
});

export const login = async ({ _username, _password }) => {
  const form = new FormData();
  form.append("_username", _username);
  form.append("_password", _password);
  try {
    const url = "auth/login_check";
    return await api.post(url, form, {
      headers: {
        contentType: "multipart/form-data"
      }
    });
  } catch (error) {
    return error;
  }
};

export default api;
