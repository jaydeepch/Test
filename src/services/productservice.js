
import config from "../component/config.json";
import httpService from "../services/httpService";

const api=config.baseapipath+"parameter/"
export function product(id,limit,status,order) {
  return httpService.post(api,{
      id:id,
      limit: limit,
      status:status,
      order:order
     
  });
     
  
}
const catapi=config.baseapipath+"categorys"
export function category(){
    return httpService.get(catapi)
}
 

const postapi=config.baseapipath+"posts"
export function post(){
    return httpService.get(postapi)
}
 