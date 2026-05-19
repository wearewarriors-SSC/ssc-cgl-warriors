export function showToast(message) {

const toast =
document.createElement('div')

toast.innerText =
message

toast.style.position =
'fixed'

toast.style.bottom =
'20px'

toast.style.right =
'20px'

toast.style.background =
'#22c55e'

toast.style.color =
'white'

toast.style.padding =
'14px'

toast.style.borderRadius =
'12px'

toast.style.zIndex =
'9999'

document.body.appendChild(
toast
)

setTimeout(() => {

toast.remove()

},2000)
}
