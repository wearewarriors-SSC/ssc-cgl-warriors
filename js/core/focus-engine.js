import { saveFocusSession } from '../storage.js'

let timer = 60 * 60
let interval

export function initializeFocusTimer(){

const timerEl =
document.querySelector('.timer')

const startBtn =
document.querySelector(
'.timer-actions button'
)

if(!timerEl || !startBtn) return

startBtn.onclick = ()=>{

clearInterval(interval)

interval = setInterval(()=>{

timer--

const mins =
Math.floor(timer/60)

const secs =
timer % 60

timerEl.innerHTML =

`${String(mins).padStart(2,'0')}
:
${String(secs).padStart(2,'0')}`

if(timer<=0){

clearInterval(interval)

saveFocusSession({

completed:true,
date:new Date()

})

alert(
'🔥 Focus Session Completed'
)

}

},1000)

}
}
