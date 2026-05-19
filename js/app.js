import { renderChart } from './charts.js'
import { loadMessages, subscribeChat } from './live.js'
import { saveNote, addGoal, sendMessage, saveMock } from './realtime.js'
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
import { mockbattle } from './components/mockbattle.js'
import { gamification } from './components/gamification.js'
import { insights } from './components/insights.js'
import { heatmap } from './components/heatmap.js'
import { vault } from './components/vault.js'
import { testseries } from './components/testseries.js'
import { library } from './components/library.js'
import { community } from './components/community.js'
import { realtime } from './components/realtime.js'
import { focusroom } from './components/focusroom.js'
import { advancedanalytics } from './components/advancedanalytics.js'
import { leaderboardlive } from './components/leaderboardlive.js'
import { studypartner } from './components/studypartner.js'
import { dailytarget } from './components/dailytarget.js'
import { speedtracker } from './components/speedtracker.js'
import { finalrevision } from './components/finalrevision.js'
import { livefeed } from './components/livefeed.js'
import { userstats } from './components/userstats.js'
import { globalchat } from './components/globalchat.js'
import { realtimedashboard } from './components/realtimedashboard.js'
import { activityfeed } from './components/activityfeed.js'
import { xpsystem } from './components/xpsystem.js'
import { studygraph } from './components/studygraph.js'
import { aiinsightspro } from './components/aiinsightspro.js'
import { personalizedplan } from './components/personalizedplan.js'
import { competitiveanalysis } from './components/competitiveanalysis.js'
import { focusanalyticspro } from './components/focusanalyticspro.js'
import { warriorstatus } from './components/warriorstatus.js'
import { smartrevision } from './components/smartrevision.js'
import { masterdashboard } from './components/masterdashboard.js'
import { cloudsync } from './components/cloudsync.js'
import { teamrooms } from './components/teamrooms.js'
import { advancedleaderboard } from './components/advancedleaderboard.js'
import { smartgoals } from './components/smartgoals.js'
import { elitezone } from './components/elitezone.js'
import { poweranalytics } from './components/poweranalytics.js'
import { ultimatehub } from './components/ultimatehub.js'
import { systemmonitor } from './components/systemmonitor.js'
import { warriorai } from './components/warriorai.js'
import { sessiontracker } from './components/sessiontracker.js'
import { errorbook } from './components/errorbook.js'
import { revisionengine } from './components/revisionengine.js'
import { consistencyengine } from './components/consistencyengine.js'
import { smartdashboard } from './components/smartdashboard.js'
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
import { mockbattle } from './components/mockbattle.js'
import { gamification } from './components/gamification.js'
import { insights } from './components/insights.js'
import { heatmap } from './components/heatmap.js'
import { vault } from './components/vault.js'
import { testseries } from './components/testseries.js'
import { library } from './components/library.js'
import { community } from './components/community.js'
import { realtime } from './components/realtime.js'
import { focusroom } from './components/focusroom.js'
import { advancedanalytics } from './components/advancedanalytics.js'
import { leaderboardlive } from './components/leaderboardlive.js'
import { studypartner } from './components/studypartner.js'
import { dailytarget } from './components/dailytarget.js'
import { speedtracker } from './components/speedtracker.js'
import { finalrevision } from './components/finalrevision.js'
import { livefeed } from './components/livefeed.js'
import { userstats } from './components/userstats.js'
import { globalchat } from './components/globalchat.js'
import { realtimedashboard } from './components/realtimedashboard.js'
import { activityfeed } from './components/activityfeed.js'
import { xpsystem } from './components/xpsystem.js'
import { studygraph } from './components/studygraph.js'
import { aiinsightspro } from './components/aiinsightspro.js'
import { personalizedplan } from './components/personalizedplan.js'
import { competitiveanalysis } from './components/competitiveanalysis.js'
import { focusanalyticspro } from './components/focusanalyticspro.js'
import { warriorstatus } from './components/warriorstatus.js'
import { smartrevision } from './components/smartrevision.js'
import { masterdashboard } from './components/masterdashboard.js'
import { cloudsync } from './components/cloudsync.js'
import { teamrooms } from './components/teamrooms.js'
import { advancedleaderboard } from './components/advancedleaderboard.js'
import { smartgoals } from './components/smartgoals.js'
import { elitezone } from './components/elitezone.js'
import { poweranalytics } from './components/poweranalytics.js'
import { ultimatehub } from './components/ultimatehub.js'
import { systemmonitor } from './components/systemmonitor.js'
import { warriorai } from './components/warriorai.js'
import { sessiontracker } from './components/sessiontracker.js'
import { errorbook } from './components/errorbook.js'
import { revisionengine } from './components/revisionengine.js'
import { consistencyengine } from './components/consistencyengine.js'
import { smartdashboard } from './components/smartdashboard.js'

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
+ mockbattle()
+ gamification()
+ insights()
+ heatmap()
+ vault()
+ testseries()
+ library()
+ community()
+ realtime()
+ focusroom()
+ advancedanalytics()
+ leaderboardlive()
+ studypartner()
+ dailytarget()
+ speedtracker()
+ finalrevision()
+ livefeed()
+ userstats()
+ globalchat()
+ realtimedashboard()
+ activityfeed()
+ xpsystem()
+ studygraph()
+ aiinsightspro()
+ personalizedplan()
+ competitiveanalysis()
+ focusanalyticspro()
+ warriorstatus()
+ smartrevision()
+ masterdashboard()
+ cloudsync()
+ teamrooms()
+ advancedleaderboard()
+ smartgoals()
+ elitezone()
+ poweranalytics()
+ ultimatehub()
+ systemmonitor()
+ warriorai()
+ sessiontracker()
+ errorbook()
+ revisionengine()
+ consistencyengine()
+ smartdashboard()
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
+ mockbattle()
+ gamification()
+ insights()
+ heatmap()
+ vault()
+ testseries()
+ library()
+ community()
+ realtime()
+ focusroom()
+ advancedanalytics()
+ leaderboardlive()
+ studypartner()
+ dailytarget()
+ speedtracker()
+ finalrevision()
+ livefeed()
+ userstats()
+ globalchat()
+ realtimedashboard()
+ activityfeed()
+ xpsystem()
+ studygraph()
+ aiinsightspro()
+ personalizedplan()
+ competitiveanalysis()
+ focusanalyticspro()
+ warriorstatus()
+ smartrevision()
+ masterdashboard()
+ cloudsync()
+ teamrooms()
+ advancedleaderboard()
+ smartgoals()
+ elitezone()
+ poweranalytics()
+ ultimatehub()
+ systemmonitor()
+ warriorai()
+ sessiontracker()
+ errorbook()
+ revisionengine()
+ consistencyengine()
+ smartdashboard()

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

async function initializeGlobalChat(){

const box =
document.getElementById(
'globalMessages'
)

if(!box) return

const messages =
await loadMessages()

box.innerHTML = ''

messages.forEach(msg => {

box.innerHTML += `
<p style="margin-top:10px">
<strong>${msg.user_email}</strong>:
${msg.message}
</p>
`

})

subscribeChat(msg => {

box.innerHTML += `
<p style="margin-top:10px">
<strong>${msg.user_email}</strong>:
${msg.message}
</p>
`

})

const btn =
document.getElementById(
'sendGlobalMessage'
)

if(btn){

btn.onclick =
async () => {

const input =
document.getElementById(
'globalMessageInput'
)

const text =
input.value

if(!text) return

const {
supabase
} =
await import('./config/supabase.js')

const {
data:userData
} =
await supabase.auth.getUser()

await supabase
.from('chat_messages')
.insert([{

user_email:
userData.user.email,

message:text

}])

input.value = ''
}
}
}

initializeGlobalChat()

setTimeout(()=>{

renderChart()

},500)

const realtimeBox =
document.getElementById(
'realtimeStats'
)

if(realtimeBox){

realtimeBox.innerHTML = `

<p>🔥 42 Active Focus Sessions</p>
<p>⚡ 128 Warriors Online</p>
<p>📚 842 Study Hours Today</p>

`
}

const activityContainer =
document.getElementById(
'activityContainer'
)

if(activityContainer){

activityContainer.innerHTML = `

<p>🔥 Rahul completed Mock Test</p>
<p>⚡ Priya entered Focus Room</p>
<p>🏆 Aman reached 15 day streak</p>
<p>📚 Ajay revised Algebra</p>

`
}
