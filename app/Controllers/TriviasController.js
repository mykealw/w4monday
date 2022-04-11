import { ProxyState } from "../AppState.js";
import { triviasService } from "../Services/TriviasService.js";
import { Pop } from "../Utils/Pop.js";


function _drawTrivia(){
    let template = ''
    ProxyState.trivia.forEach(t => template += ` <div class="col-md-3">
    <h4>${t.category}--${t.difficulty} </h4>
    <p> ${t.question}</p>
    <p class=" text-dark on-hover">${t.answer}</p>
  </div>`)
document.getElementById("inject").innerHTML = template
}
export class TriviasController {
    constructor(){
this.getTrivia()
_drawTrivia()
ProxyState.on('trivia', _drawTrivia)
    }


    async getTrivia(){
        try {
            await triviasService.getTrivia()
        } catch (error) {
            Pop.toast(error.message, 'error')
            console.log(error);
            
        }
    }
}