export function saveData(key,data){

localStorage.setItem(
key,
JSON.stringify(data)
)

}

export function loadData(key){

const data =
localStorage.getItem(key)

return data
? JSON.parse(data)
: null

}

export function addMock(mock){

const mocks =
loadData('mocks') || []

mocks.push(mock)

saveData('mocks',mocks)

}

export function getMocks(){

return loadData('mocks') || []

}

export function saveTasks(tasks){

saveData('tasks',tasks)

}

export function getTasks(){

return loadData('tasks') || []

}

export function saveSyllabus(data){

saveData('syllabus',data)

}

export function getSyllabus(){

return loadData('syllabus') || []

}

export function saveFocusSession(session){

const sessions =
loadData('focusSessions') || []

sessions.push(session)

saveData('focusSessions',sessions)

}

export function getFocusSessions(){

return loadData('focusSessions') || []

}
