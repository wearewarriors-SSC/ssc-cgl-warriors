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
<div class="tab" onclick="showTab('notifications',this)">Notifications</div>
<div class="tab" onclick="showTab('friends',this)">Friends</div>
<div class="tab" onclick="showTab('achievements',this)">Achievements</div>
<div class="tab" onclick="showTab('settings',this)">Settings</div>
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
<div class="tab" onclick="showTab('notifications',this)">Notifications</div>
<div class="tab" onclick="showTab('friends',this)">Friends</div>
<div class="tab" onclick="showTab('achievements',this)">Achievements</div>
<div class="tab" onclick="showTab('settings',this)">Settings</div>
</div>

</div>
`
}
