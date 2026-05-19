import {
    savePreferences,
    getPreferences
}
from './preferences.js'

export function syncPreferences() {

    const preferences =
    getPreferences()

    console.log(
        'Cloud Sync Ready',
        preferences
    )
}

export function updatePreference(
    key,
    value
) {

    const current =
    getPreferences()

    current[key] = value

    savePreferences(
        current
    )
}
