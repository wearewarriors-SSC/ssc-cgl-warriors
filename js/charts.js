export function renderChart(){

const canvas =
document.getElementById(
'studyChart'
)

if(!canvas) return

const ctx =
canvas.getContext('2d')

ctx.fillStyle =
'#4f46e5'

const values =
[60,90,40,120,80,150]

values.forEach((v,i)=>{

ctx.fillRect(
i*60 + 20,
180-v,
40,
v
)

})
}
