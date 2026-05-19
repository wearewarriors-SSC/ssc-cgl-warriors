import {
supabase
}
from './config/supabase.js'

import {
navbar
}
from './components/navbar.js'

import {
dashboard
}
from './components/dashboard.js'

import {
focus
}
from './components/focus.js'

import {
analytics
}
from './components/analytics.js'

const {
data
} =
await supabase.auth.getUser()

if(!data.user){

window.location.href =
'./pages/auth.html'
}

document.body.innerHTML =

navbar()
+
dashboard()
+
focus()
+
analytics()

window.showTab =
(id,el) => {

document
.querySelectorAll('.section')
.forEach(sec => {

sec.classList.remove('active')

})

document
.querySelectorAll('.tab')
.forEach(tab => {

tab.classList.remove('active')

})

document
.getElementById(id)
.classList.add('active')

el.classList.add('active')
}

window.logout =
async () => {

await supabase.auth.signOut()

window.location.href =
'./pages/auth.html'
}
