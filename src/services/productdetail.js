
import config from "../component/config.json";
import httpService from "../services/httpService";

const api=config.baseapipath+"products/"
export function product(id) {
  return httpService.get(api+id);
}
 


export function allproduct(pageNumber) {
  const apis=`http://127.0.0.1:8000/api/allproduct/?page=${pageNumber}`
  return httpService.get(apis);
}