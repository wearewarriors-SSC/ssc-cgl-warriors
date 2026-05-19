window.devtools = {

storage(){

console.log(
JSON.parse(
localStorage.getItem('mocks')
|| '[]'
)
)

console.log(
JSON.parse(
localStorage.getItem('tasks')
|| '[]'
)
)

},

clear(){

localStorage.clear()

console.log(
'🧹 Local Storage Cleared'
)

}

}
