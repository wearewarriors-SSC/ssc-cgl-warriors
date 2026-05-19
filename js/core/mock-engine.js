import { addMock } from '../storage.js'
import { refreshDashboard } from './dashboard-engine.js'

export function initializeMockSystem(){

const inputs =
document.querySelectorAll(
'#mocks input[type="number"]'
)

const button =
document.querySelector(
'#mocks button'
)

if(!button) return

button.onclick = () => {

let total = 0

inputs.forEach(input=>{

total += Number(input.value || 0)

})

const mock = {

name:
document.querySelector(
'#mocks input'
).value,

score:total,

date:
new Date()
.toLocaleDateString()

}

addMock(mock)

document.querySelector(
'#mocks .metric'
).innerHTML =
`${total} / 200`

refreshDashboard()

alert(
'⚔️ Mock Saved Successfully'
)

}
}
