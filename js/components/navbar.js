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
</div>

<div class="tab"
onclick="showTab('syllabus',this)">
Syllabus
</div>

</div>
`
}
