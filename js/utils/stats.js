import {
    getLocal
}
from './storage.js'

export function getStudyStats() {

    const sessions =
    getLocal(
        'offline_sessions',
        []
    )

    const totalMinutes =
    sessions.reduce(
        (sum, item) =>
        sum + (
            item.duration || 0
        ),
        0
    )

    return {

        totalSessions:
        sessions.length,

        totalMinutes
    }
}
