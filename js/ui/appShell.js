export function applyAppShell() {

const btn =
document.createElement('button')

btn.innerText =
'Logout'

btn.className =
'logout-btn'

btn.onclick = async () => {

const module =
await import('../auth/logout.js')

module.logout()
}

document.body.appendChild(btn)

}
