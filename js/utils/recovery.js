import {
    saveLocal,
    getLocal,
    removeLocal
}
from './storage.js'

const KEY =
'active_timer'

export function saveActiveTimer(
    payload
) {

    saveLocal(KEY, payload)
}

export function getActiveTimer() {

    return getLocal(KEY)
}

export function clearActiveTimer() {

    removeLocal(KEY)
}
