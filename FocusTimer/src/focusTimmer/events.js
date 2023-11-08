import state from "./state.js";
import { controls } from "./elements.js";
import * as actions from './actions.js'
import * as el from './elements.js'
import { uptadeDisplay } from "./timer.js";

export function registerControls(){
  controls.addEventListener('click', (event ) =>{
    const action = event.target.dataset.action // target significa alvo 
    if   (typeof actions[action] != "function"){
      return 
    }

       actions[action]()
  })
}

export function setMinutes() {
  el.minutes.addEventListener('focus',() =>{
    el.minutes.textContent = ""
  })
                                    //expressao regular permite observar 1 a 1 os caracteres
  el.minutes.onkeypress = (event) => /\d/.test(event.key)
  
  el.minutes.addEventListener('blur',(event)=> {
    let time = event.currentTarget.textContent
    //: nao ,? pergunta
    time = time > 60  ?  60 : time
    
    state.minutes = time
    state.seconds = 0

    uptadeDisplay()
    el.minutes.removeAttribute('contenteditable')

  })
  

}
 