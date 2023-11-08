import state from "./state.js"
import *  as el from './elements.js'
import { reset } from "./actions.js"

export function countDown (){
     
   clearTimeout(state.countDownId)

   


 if(!state.isRunning){
   return

 }

 let minutes =  Number(el.minutes.textContent)
 let  seconds = Number(el.seconds.textContent)

 seconds--

 if(seconds < 0){
  seconds = 59
  minutes --

 }

 if(minutes <0){
  reset()
  return
 }
  state.countDownId= setTimeout(() => countDown()  ,1000)


 uptadeDisplay(minutes,seconds)

 }


export  function uptadeDisplay(minutes,seconds){
  minutes=minutes ?? state.minutes //nullish operator
  seconds = seconds ?? state.seconds 
                                          //padstar preencher 
  el.minutes.textContent =String(minutes).padStart(2,'0')
  el.seconds.textContent =String(seconds).padStart(2,'0')

}