export function globalchat(){

return `

<div
id="globalchat"
class="section"
>

<div class="grid">

<div class="card">

<h2>
Global Chat
</h2>

<div
id="globalMessages"
style="
height:320px;
overflow:auto;
margin-top:16px;
padding:10px;
background:rgba(255,255,255,0.04);
border-radius:14px;
"
></div>

<input
id="globalMessageInput"
placeholder="Type message..."
/>

<button
id="sendGlobalMessage"
style="margin-top:18px"
>
Send Message
</button>

</div>

</div>

</div>
`
}
