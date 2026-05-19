import {
    saveLocal,
    getLocal
}
from '../utils/storage.js'

const KEY =
'offline_sessions'

export function queueSession(
    payload
) {

    const sessions =
    getLocal(KEY, [])

    sessions.push(payload)

    saveLocal(
        KEY,
        sessions
    )
}

export function getQueuedSessions() {

    return getLocal(
        KEY,
        []
    )
}
