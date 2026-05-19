const fab =
document.createElement('button')

fab.innerHTML = '🌙'

fab.style.position = 'fixed'
fab.style.bottom = '20px'
fab.style.right = '20px'
fab.style.width = '60px'
fab.style.height = '60px'
fab.style.borderRadius = '50%'
fab.style.zIndex = '999'
fab.style.fontSize = '22px'
fab.style.boxShadow = '0 10px 25px rgba(0,0,0,0.4)'

document.body.appendChild(fab)

fab.onclick = () => {

document.body.classList.toggle('light')

if(document.body.classList.contains('light')){

document.body.style.background = '#f3f4f6'
document.body.style.color = '#111827'
fab.innerHTML = '☀️'

}else{

document.body.style.background = '#060816'
document.body.style.color = 'white'
fab.innerHTML = '🌙'
}

}
