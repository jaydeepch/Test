
import http from "./httpService";

import config from "../config.json";

const registerap = "http://127.0.0.1:8000/api/register";
export function register(account) {
  http.post(registerap, {
    name:account.name,
    email:account.username,
    password:account.password,
  });
}