import {
    saveLocal,
    getLocal
}
from './storage.js'

const KEY =
'user_preferences'

export function savePreferences(
    preferences
) {

    saveLocal(
        KEY,
        preferences
    )
}

export function getPreferences() {

    return getLocal(
        KEY,
        {}
    )
}
