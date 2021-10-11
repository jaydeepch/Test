
import httpService from "../services/httpService";
import config from "../component/config.json";


const api = config.baseapipath+"catproduct/";

export function catproduct(id) {
  return httpService.get(api+id);
}
 

