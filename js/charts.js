const ctx1 =
document.getElementById('mockChart')

if(ctx1){

new Chart(ctx1,{
type:'line',
data:{
labels:[
'Mock 1',
'Mock 2',
'Mock 3',
'Mock 4',
'Mock 5'
],
datasets:[{
label:'Score',
data:[102,118,126,137,148],
borderColor:'#8f44ff',
backgroundColor:'rgba(143,68,255,0.2)',
fill:true,
tension:0.4
}]
},
options:{
responsive:true,
plugins:{
legend:{
labels:{
color:'white'
}
}
},
scales:{
x:{
ticks:{color:'white'}
},
y:{
ticks:{color:'white'}
}
}
}
})

}

const ctx2 =
document.getElementById('radarChart')

if(ctx2){

new Chart(ctx2,{
type:'radar',
data:{
labels:[
'Quant',
'Reasoning',
'English',
'GA'
],
datasets:[{
label:'You',
data:[82,91,74,69],
borderColor:'#8f44ff',
backgroundColor:'rgba(143,68,255,0.2)'
},
{
label:'Study Buddy',
data:[76,84,79,71],
borderColor:'#00d4ff',
backgroundColor:'rgba(0,212,255,0.2)'
}]
},
options:{
responsive:true,
plugins:{
legend:{
labels:{
color:'white'
}
}
},
scales:{
r:{
pointLabels:{
color:'white'
},
ticks:{
color:'white',
backdropColor:'transparent'
},
grid:{
color:'rgba(255,255,255,0.1)'
}
}
}
}
})

}
