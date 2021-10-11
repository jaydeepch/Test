
import config from "../component/config.json";
import httpService from "../services/httpService";

const api=config.baseapipath+"postslug/"
export function post(slug) {
  return httpService.get(api+slug);
}
 

