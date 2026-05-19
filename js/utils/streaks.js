import {
    saveLocal,
    getLocal
}
from './storage.js'

const KEY =
'study_streak'

export function incrementStreak() {

    let streak =
    getLocal(KEY, 0)

    streak++

    saveLocal(KEY, streak)

    return streak
}

export function getStreak() {

    return getLocal(KEY, 0)
}
