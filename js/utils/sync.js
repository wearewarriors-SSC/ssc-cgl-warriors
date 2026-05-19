import {
    isOnline
}
from './network.js'

import {
    getQueuedSessions
}
from '../database/battleground.js'

export async function syncOfflineData() {

    if (!isOnline()) {

        return
    }

    const sessions =
    getQueuedSessions()

    console.log(
        'Syncing',
        sessions.length,
        'offline sessions'
    )
}
