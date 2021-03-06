import axios from "axios";
import Raven from "raven-js";
import toast from "react-toastify";
axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    Raven.captureException(error);
    console.log("looging the error", error);
    alert("an unexcepeted error");
  }
  return Promise.reject(error);
});
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
