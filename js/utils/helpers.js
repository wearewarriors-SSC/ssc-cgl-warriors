export function formatDate(date) {

return new Date(date)

.toLocaleString()
}

export function safeHTML(text='') {

const div =
document.createElement('div')

div.innerText = text

return div.innerHTML
}
