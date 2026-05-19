import { initializeMockSystem }
from './mock-engine.js'

import { initializeFocusTimer }
from './focus-engine.js'

import { initializeSyllabus }
from './syllabus-engine.js'

import { initializeTasks }
from './productivity-engine.js'

setTimeout(()=>{

initializeMockSystem()
initializeFocusTimer()
initializeSyllabus()
initializeTasks()

console.log(
'⚔️ Core Systems Initialized'
)

},500)

import { validateApp }
from './validator.js'

validateApp()
