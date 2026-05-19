import { getMocks } from '../storage.js'

export function refreshDashboard(){

const mocks =
getMocks()

const mockMetric =
document.querySelectorAll('.metric')[2]

if(mockMetric){

mockMetric.innerHTML =
mocks.length

}

}
