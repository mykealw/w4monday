import { ProxyState } from "../AppState.js";
import { multiplesService } from "../Services/MultiplesService.js";
import { Pop } from "../Utils/Pop.js";

function _drawMultiple(){
    let templateM = ''
    ProxyState.multiple.forEach(m => templateM += `
    <div class="col-md-3">
    <h4>${m.category} - ${m.difficulty} </h4>
    <p>${m.question}</p>
    <p class="on-hover">${m.answer} </p>
  </div>  `)
  document.getElementById("inject2").innerHTML = templateM
}

export class MultiplesController{
constructor(){
    // console.log("hello from m controller");
    this.getMultiple()
    _drawMultiple
    ProxyState.on('multiple', _drawMultiple)

}


async getMultiple(){
    try {
        await multiplesService.getMultiple()
    } catch (error) {
        Pop.toast(error.message, 'error')
        console.log(error);
        
    }
}
}