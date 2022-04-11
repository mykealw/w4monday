import { ProxyState } from "../AppState.js";
import { Trivia } from "../Models/Trivia.js";

class TriviasService{
   async getTrivia() {
        const response = await axios.get('https://opentdb.com/api.php?amount=8&category=23&type=boolean')
        console.log("this is the response", response);
       ProxyState.trivia = response.data.results.map(t => new Trivia(t))
       console.log(ProxyState.trivia, "proxy trivia");
    }


}

export const triviasService = new TriviasService();