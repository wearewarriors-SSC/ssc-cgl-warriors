export function validateApp(){

const sections =
document.querySelectorAll('.section')

if(sections.length < 5){

console.error(
'❌ Missing sections'
)

}

const tabs =
document.querySelectorAll('.tab')

if(tabs.length < 5){

console.error(
'❌ Missing tabs'
)

}

console.log(
'✅ App Validation Complete'
)

}
