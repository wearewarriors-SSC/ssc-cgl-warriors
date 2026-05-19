import {
    saveLocal,
    getLocal
}
from './storage.js'

const KEY =
'daily_goals'

export function saveGoal(
    goal
) {

    const goals =
    getLocal(KEY, [])

    goals.push(goal)

    saveLocal(
        KEY,
        goals
    )
}

export function getGoals() {

    return getLocal(
        KEY,
        []
    )
}
