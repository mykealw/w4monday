import { ProxyState } from "../AppState.js";
import { Multiple } from "../Models/Multiple.js";


class MultiplesService{
  async  getMultiple() {
       const response = await axios.get('https://opentdb.com/api.php?amount=10&type=multiple')
       console.log("response", response);
       ProxyState.multiple = response.data.results.map(m => new Multiple(m))
    }




}


export const multiplesService = new MultiplesService();