export function navbar(){

return `

<div class="topbar">

<div class="logo">
⚔️ SSC Warriors
</div>

<button onclick="logout()">
Logout
</button>

</div>

<div class="tabs">

<div class="tab active"
onclick="showTab('dashboard',this)">
Dashboard
</div>

<div class="tab"
onclick="showTab('focus',this)">
Focus
</div>

<div class="tab"
onclick="showTab('mocks',this)">
Mocks
</div>

<div class="tab"
onclick="showTab('analytics',this)">
Analytics
<div class="tab" onclick="showTab('leaderboard',this)">Leaderboard</div>
<div class="tab" onclick="showTab('mocks',this)">Mocks</div>
<div class="tab" onclick="showTab('syllabus',this)">Syllabus</div>
<div class="tab" onclick="showTab('notes',this)">Notes</div>
<div class="tab" onclick="showTab('goals',this)">Goals</div>
<div class="tab" onclick="showTab('todos',this)">Todos</div>
<div class="tab" onclick="showTab('chat',this)">Chat</div>
<div class="tab" onclick="showTab('profile',this)">Profile</div>
<div class="tab" onclick="showTab('stats',this)">Stats</div>
<div class="tab" onclick="showTab('revision',this)">Revision</div>
<div class="tab" onclick="showTab('arena',this)">Arena</div>
<div class="tab" onclick="showTab('streaks',this)">Streaks</div>
<div class="tab" onclick="showTab('challenges',this)">Challenges</div>
<div class="tab" onclick="showTab('notifications',this)">Notifications</div>
<div class="tab" onclick="showTab('friends',this)">Friends</div>
<div class="tab" onclick="showTab('achievements',this)">Achievements</div>
<div class="tab" onclick="showTab('settings',this)">Settings</div>
<div class="tab" onclick="showTab('pyq',this)">PYQ</div>
<div class="tab" onclick="showTab('weaktopics',this)">Weak Topics</div>
<div class="tab" onclick="showTab('history',this)">History</div>
<div class="tab" onclick="showTab('rankings',this)">Rankings</div>
<div class="tab" onclick="showTab('rooms',this)">Rooms</div>
<div class="tab" onclick="showTab('activity',this)">Activity</div>
<div class="tab" onclick="showTab('quotes',this)">Quotes</div>
<div class="tab" onclick="showTab('calendar',this)">Calendar</div>
<div class="tab" onclick="showTab('resources',this)">Resources</div>
<div class="tab" onclick="showTab('examtracker',this)">Exam Tracker</div>
<div class="tab" onclick="showTab('aiassistant',this)">AI Assistant</div>
<div class="tab" onclick="showTab('doubts',this)">Doubts</div>
<div class="tab" onclick="showTab('battles',this)">Battles</div>
<div class="tab" onclick="showTab('store',this)">Store</div>
<div class="tab" onclick="showTab('themes',this)">Themes</div>
<div class="tab" onclick="showTab('focusmusic',this)">Focus Music</div>
<div class="tab" onclick="showTab('roadmap',this)">Roadmap</div>
<div class="tab" onclick="showTab('habits',this)">Habits</div>
<div class="tab" onclick="showTab('mockanalysis',this)">Mock Analysis</div>
<div class="tab" onclick="showTab('productivity',this)">Productivity</div>
<div class="tab" onclick="showTab('revisiontracker',this)">Revision Tracker</div>
<div class="tab" onclick="showTab('competition',this)">Competition</div>
<div class="tab" onclick="showTab('mentor',this)">Mentor</div>
<div class="tab" onclick="showTab('dailyplanner',this)">Planner</div>
<div class="tab" onclick="showTab('weeklyreport',this)">Reports</div>
<div class="tab" onclick="showTab('examstrategy',this)">Strategy</div>
<div class="tab" onclick="showTab('rankpredictor',this)">Rank Predictor</div>
<div class="tab" onclick="showTab('focusstats',this)">Focus Stats</div>
<div class="tab" onclick="showTab('notifications',this)">Notifications</div>
<div class="tab" onclick="showTab('friends',this)">Friends</div>
<div class="tab" onclick="showTab('achievements',this)">Achievements</div>
<div class="tab" onclick="showTab('settings',this)">Settings</div>
<div class="tab" onclick="showTab('pyq',this)">PYQ</div>
<div class="tab" onclick="showTab('weaktopics',this)">Weak Topics</div>
<div class="tab" onclick="showTab('history',this)">History</div>
<div class="tab" onclick="showTab('rankings',this)">Rankings</div>
<div class="tab" onclick="showTab('rooms',this)">Rooms</div>
<div class="tab" onclick="showTab('activity',this)">Activity</div>
<div class="tab" onclick="showTab('quotes',this)">Quotes</div>
<div class="tab" onclick="showTab('calendar',this)">Calendar</div>
<div class="tab" onclick="showTab('resources',this)">Resources</div>
<div class="tab" onclick="showTab('examtracker',this)">Exam Tracker</div>
<div class="tab" onclick="showTab('aiassistant',this)">AI Assistant</div>
<div class="tab" onclick="showTab('doubts',this)">Doubts</div>
<div class="tab" onclick="showTab('battles',this)">Battles</div>
<div class="tab" onclick="showTab('store',this)">Store</div>
<div class="tab" onclick="showTab('themes',this)">Themes</div>
<div class="tab" onclick="showTab('focusmusic',this)">Focus Music</div>
<div class="tab" onclick="showTab('roadmap',this)">Roadmap</div>
<div class="tab" onclick="showTab('habits',this)">Habits</div>
<div class="tab" onclick="showTab('mockanalysis',this)">Mock Analysis</div>
<div class="tab" onclick="showTab('productivity',this)">Productivity</div>
<div class="tab" onclick="showTab('revisiontracker',this)">Revision Tracker</div>
<div class="tab" onclick="showTab('competition',this)">Competition</div>
<div class="tab" onclick="showTab('mentor',this)">Mentor</div>
<div class="tab" onclick="showTab('dailyplanner',this)">Planner</div>
<div class="tab" onclick="showTab('weeklyreport',this)">Reports</div>
<div class="tab" onclick="showTab('examstrategy',this)">Strategy</div>
<div class="tab" onclick="showTab('rankpredictor',this)">Rank Predictor</div>
<div class="tab" onclick="showTab('focusstats',this)">Focus Stats</div>
</div>

<div class="tab"
onclick="showTab('syllabus',this)">
Syllabus
<div class="tab" onclick="showTab('notes',this)">Notes</div>
<div class="tab" onclick="showTab('goals',this)">Goals</div>
<div class="tab" onclick="showTab('todos',this)">Todos</div>
<div class="tab" onclick="showTab('chat',this)">Chat</div>
<div class="tab" onclick="showTab('profile',this)">Profile</div>
<div class="tab" onclick="showTab('stats',this)">Stats</div>
<div class="tab" onclick="showTab('revision',this)">Revision</div>
<div class="tab" onclick="showTab('arena',this)">Arena</div>
<div class="tab" onclick="showTab('streaks',this)">Streaks</div>
<div class="tab" onclick="showTab('challenges',this)">Challenges</div>
<div class="tab" onclick="showTab('notifications',this)">Notifications</div>
<div class="tab" onclick="showTab('friends',this)">Friends</div>
<div class="tab" onclick="showTab('achievements',this)">Achievements</div>
<div class="tab" onclick="showTab('settings',this)">Settings</div>
<div class="tab" onclick="showTab('pyq',this)">PYQ</div>
<div class="tab" onclick="showTab('weaktopics',this)">Weak Topics</div>
<div class="tab" onclick="showTab('history',this)">History</div>
<div class="tab" onclick="showTab('rankings',this)">Rankings</div>
<div class="tab" onclick="showTab('rooms',this)">Rooms</div>
<div class="tab" onclick="showTab('activity',this)">Activity</div>
<div class="tab" onclick="showTab('quotes',this)">Quotes</div>
<div class="tab" onclick="showTab('calendar',this)">Calendar</div>
<div class="tab" onclick="showTab('resources',this)">Resources</div>
<div class="tab" onclick="showTab('examtracker',this)">Exam Tracker</div>
<div class="tab" onclick="showTab('aiassistant',this)">AI Assistant</div>
<div class="tab" onclick="showTab('doubts',this)">Doubts</div>
<div class="tab" onclick="showTab('battles',this)">Battles</div>
<div class="tab" onclick="showTab('store',this)">Store</div>
<div class="tab" onclick="showTab('themes',this)">Themes</div>
<div class="tab" onclick="showTab('focusmusic',this)">Focus Music</div>
<div class="tab" onclick="showTab('roadmap',this)">Roadmap</div>
<div class="tab" onclick="showTab('habits',this)">Habits</div>
<div class="tab" onclick="showTab('mockanalysis',this)">Mock Analysis</div>
<div class="tab" onclick="showTab('productivity',this)">Productivity</div>
<div class="tab" onclick="showTab('revisiontracker',this)">Revision Tracker</div>
<div class="tab" onclick="showTab('competition',this)">Competition</div>
<div class="tab" onclick="showTab('mentor',this)">Mentor</div>
<div class="tab" onclick="showTab('dailyplanner',this)">Planner</div>
<div class="tab" onclick="showTab('weeklyreport',this)">Reports</div>
<div class="tab" onclick="showTab('examstrategy',this)">Strategy</div>
<div class="tab" onclick="showTab('rankpredictor',this)">Rank Predictor</div>
<div class="tab" onclick="showTab('focusstats',this)">Focus Stats</div>
<div class="tab" onclick="showTab('notifications',this)">Notifications</div>
<div class="tab" onclick="showTab('friends',this)">Friends</div>
<div class="tab" onclick="showTab('achievements',this)">Achievements</div>
<div class="tab" onclick="showTab('settings',this)">Settings</div>
<div class="tab" onclick="showTab('pyq',this)">PYQ</div>
<div class="tab" onclick="showTab('weaktopics',this)">Weak Topics</div>
<div class="tab" onclick="showTab('history',this)">History</div>
<div class="tab" onclick="showTab('rankings',this)">Rankings</div>
<div class="tab" onclick="showTab('rooms',this)">Rooms</div>
<div class="tab" onclick="showTab('activity',this)">Activity</div>
<div class="tab" onclick="showTab('quotes',this)">Quotes</div>
<div class="tab" onclick="showTab('calendar',this)">Calendar</div>
<div class="tab" onclick="showTab('resources',this)">Resources</div>
<div class="tab" onclick="showTab('examtracker',this)">Exam Tracker</div>
<div class="tab" onclick="showTab('aiassistant',this)">AI Assistant</div>
<div class="tab" onclick="showTab('doubts',this)">Doubts</div>
<div class="tab" onclick="showTab('battles',this)">Battles</div>
<div class="tab" onclick="showTab('store',this)">Store</div>
<div class="tab" onclick="showTab('themes',this)">Themes</div>
<div class="tab" onclick="showTab('focusmusic',this)">Focus Music</div>
<div class="tab" onclick="showTab('roadmap',this)">Roadmap</div>
<div class="tab" onclick="showTab('habits',this)">Habits</div>
<div class="tab" onclick="showTab('mockanalysis',this)">Mock Analysis</div>
<div class="tab" onclick="showTab('productivity',this)">Productivity</div>
<div class="tab" onclick="showTab('revisiontracker',this)">Revision Tracker</div>
<div class="tab" onclick="showTab('competition',this)">Competition</div>
<div class="tab" onclick="showTab('mentor',this)">Mentor</div>
<div class="tab" onclick="showTab('dailyplanner',this)">Planner</div>
<div class="tab" onclick="showTab('weeklyreport',this)">Reports</div>
<div class="tab" onclick="showTab('examstrategy',this)">Strategy</div>
<div class="tab" onclick="showTab('rankpredictor',this)">Rank Predictor</div>
<div class="tab" onclick="showTab('focusstats',this)">Focus Stats</div>
</div>

</div>
`
}
