
import http from "../services/httpService";

const apiEndpoint = " http://127.0.0.1:8000/api/login";

export function login(email, password) {
  return http.post(apiEndpoint, { email, password });
}
 

