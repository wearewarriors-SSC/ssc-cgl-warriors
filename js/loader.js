const loader =
document.createElement('div')

loader.id='loader'

loader.innerHTML = `

<div class="loader-box">

<div class="spinner"></div>

<h2>
⚔️ SSC Warriors
</h2>

<p>
Loading Battle Systems...
</p>

</div>

`

document.body.appendChild(loader)

window.addEventListener('load',()=>{

setTimeout(()=>{

loader.style.opacity='0'

setTimeout(()=>{

loader.remove()

},500)

},1200)

})
