setInterval(()=>{

const metrics =
document.querySelectorAll('.metric')

metrics.forEach(metric=>{

metric.style.opacity='0.7'

setTimeout(()=>{

metric.style.opacity='1'

},300)

})

},4000)
