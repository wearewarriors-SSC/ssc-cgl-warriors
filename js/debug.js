window.onerror = function(
msg,
src,
line,
col,
err
){

console.error(
'🔥 Runtime Error:',
msg,
src,
line
)

const box =
document.createElement('div')

box.style.position='fixed'
box.style.bottom='20px'
box.style.left='20px'
box.style.padding='14px 18px'
box.style.background='#dc2626'
box.style.color='white'
box.style.zIndex='99999'
box.style.borderRadius='14px'

box.innerHTML = `
⚠️ Runtime Error:
${msg}
`

document.body.appendChild(box)

setTimeout(()=>{

box.remove()

},5000)

}

console.log(
'⚔️ Debug Engine Active'
)
