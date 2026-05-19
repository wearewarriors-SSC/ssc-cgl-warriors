export function dashboard(){

return `

<div id="dashboard" class="section active">

<div class="hero">

<h1>
⚔️ Warriors Arena
</h1>

<p>
Target SSC CGL Top Rank Blueprint Matrix
</p>

</div>

<div class="grid">

<div class="card">

<h2>
Live Study Battleground
</h2>

<div class="versus">

<div>
<h3>Ajay</h3>
<div class="metric">4h 20m</div>
</div>

<div class="vs">VS</div>

<div>
<h3>RG</h3>
<div class="metric">3h 55m</div>
</div>

</div>

<p class="status">
🔥 You are leading today
</p>

</div>

<div class="card">
<h2>Today's Study Volume</h2>
<div class="metric">4h 20m</div>
</div>

<div class="card">
<h2>Total Mock Tests</h2>
<div class="metric">48</div>
</div>

<div class="card">
<h2>Syllabus Progress</h2>

<div class="progress">
<div class="progress-fill" style="width:72%"></div>
</div>

<p>72% Completed</p>

</div>

<div class="card large">

<h2>
Mock Growth Curve
</h2>

<canvas id="mockChart"></canvas>

</div>

<div class="card large">

<h2>
Radar Analytics
</h2>

<canvas id="radarChart"></canvas>

</div>

</div>

</div>
`
}
