export function initializeSyllabus(){

const buttons =
document.querySelectorAll(
'#syllabus button'
)

buttons.forEach(btn=>{

btn.onclick = ()=>{

btn.innerHTML='✅ Done'

btn.style.opacity='0.6'

}

})

}
