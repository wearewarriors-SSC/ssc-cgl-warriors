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
import { mocks } from './components/mocks.js'
import { syllabus } from './components/syllabus.js'
import { leaderboard } from './components/leaderboard.js'
import { notes } from './components/notes.js'
import { goals } from './components/goals.js'
import { todos } from './components/todos.js'
import { chat } from './components/chat.js'
import { profile } from './components/profile.js'
import { stats } from './components/stats.js'
import { revision } from './components/revision.js'
import { arena } from './components/arena.js'
import { streaks } from './components/streaks.js'
import { challenges } from './components/challenges.js'
import { notifications } from './components/notifications.js'
import { friends } from './components/friends.js'
import { achievements } from './components/achievements.js'
import { settings } from './components/settings.js'
import { notifications } from './components/notifications.js'
import { friends } from './components/friends.js'
import { achievements } from './components/achievements.js'
import { settings } from './components/settings.js'

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
+ mocks()
+ syllabus()
+ leaderboard()
+ notes()
+ goals()
+ todos()
+ chat()
+ profile()
+ stats()
+ revision()
+ arena()
+ streaks()
+ challenges()
+ notifications()
+ friends()
+ achievements()
+ settings()
+ notifications()
+ friends()
+ achievements()
+ settings()

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
