import {
saveTasks,
getTasks
}
from '../storage.js'

export function initializeTasks(){

const input =
document.querySelector(
'#productivity input'
)

const button =
document.querySelector(
'#productivity button'
)

if(!input || !button) return

button.onclick = ()=>{

const tasks =
getTasks()

tasks.push(input.value)

saveTasks(tasks)

alert(
'✅ Task Added'
)

input.value=''

}

}
