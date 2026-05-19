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
import { pyq } from './components/pyq.js'
import { weaktopics } from './components/weaktopics.js'
import { history } from './components/history.js'
import { rankings } from './components/rankings.js'
import { rooms } from './components/rooms.js'
import { activity } from './components/activity.js'
import { quotes } from './components/quotes.js'
import { calendar } from './components/calendar.js'
import { resources } from './components/resources.js'
import { examtracker } from './components/examtracker.js'
import { aiassistant } from './components/aiassistant.js'
import { doubts } from './components/doubts.js'
import { battles } from './components/battles.js'
import { store } from './components/store.js'
import { themes } from './components/themes.js'
import { focusmusic } from './components/focusmusic.js'
import { roadmap } from './components/roadmap.js'
import { habits } from './components/habits.js'
import { mockanalysis } from './components/mockanalysis.js'
import { productivity } from './components/productivity.js'
import { revisiontracker } from './components/revisiontracker.js'
import { competition } from './components/competition.js'
import { mentor } from './components/mentor.js'
import { dailyplanner } from './components/dailyplanner.js'
import { weeklyreport } from './components/weeklyreport.js'
import { examstrategy } from './components/examstrategy.js'
import { rankpredictor } from './components/rankpredictor.js'
import { focusstats } from './components/focusstats.js'
import { notifications } from './components/notifications.js'
import { friends } from './components/friends.js'
import { achievements } from './components/achievements.js'
import { settings } from './components/settings.js'
import { pyq } from './components/pyq.js'
import { weaktopics } from './components/weaktopics.js'
import { history } from './components/history.js'
import { rankings } from './components/rankings.js'
import { rooms } from './components/rooms.js'
import { activity } from './components/activity.js'
import { quotes } from './components/quotes.js'
import { calendar } from './components/calendar.js'
import { resources } from './components/resources.js'
import { examtracker } from './components/examtracker.js'
import { aiassistant } from './components/aiassistant.js'
import { doubts } from './components/doubts.js'
import { battles } from './components/battles.js'
import { store } from './components/store.js'
import { themes } from './components/themes.js'
import { focusmusic } from './components/focusmusic.js'
import { roadmap } from './components/roadmap.js'
import { habits } from './components/habits.js'
import { mockanalysis } from './components/mockanalysis.js'
import { productivity } from './components/productivity.js'
import { revisiontracker } from './components/revisiontracker.js'
import { competition } from './components/competition.js'
import { mentor } from './components/mentor.js'
import { dailyplanner } from './components/dailyplanner.js'
import { weeklyreport } from './components/weeklyreport.js'
import { examstrategy } from './components/examstrategy.js'
import { rankpredictor } from './components/rankpredictor.js'
import { focusstats } from './components/focusstats.js'

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
+ pyq()
+ weaktopics()
+ history()
+ rankings()
+ rooms()
+ activity()
+ quotes()
+ calendar()
+ resources()
+ examtracker()
+ aiassistant()
+ doubts()
+ battles()
+ store()
+ themes()
+ focusmusic()
+ roadmap()
+ habits()
+ mockanalysis()
+ productivity()
+ revisiontracker()
+ competition()
+ mentor()
+ dailyplanner()
+ weeklyreport()
+ examstrategy()
+ rankpredictor()
+ focusstats()
+ notifications()
+ friends()
+ achievements()
+ settings()
+ pyq()
+ weaktopics()
+ history()
+ rankings()
+ rooms()
+ activity()
+ quotes()
+ calendar()
+ resources()
+ examtracker()
+ aiassistant()
+ doubts()
+ battles()
+ store()
+ themes()
+ focusmusic()
+ roadmap()
+ habits()
+ mockanalysis()
+ productivity()
+ revisiontracker()
+ competition()
+ mentor()
+ dailyplanner()
+ weeklyreport()
+ examstrategy()
+ rankpredictor()
+ focusstats()

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
