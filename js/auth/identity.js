import {
    saveLocal,
    getLocal
}
from '../utils/storage.js'

const USER_KEY =
'ssc_username'

const DEVICE_KEY =
'ssc_device_id'

export function saveUsername(
    username
) {

    saveLocal(
        USER_KEY,
        username
    )
}

export function getUsername() {

    return getLocal(
        USER_KEY,
        null
    )
}

export function getDeviceId() {

    let deviceId =
    getLocal(
        DEVICE_KEY
    )

    if (!deviceId) {

        deviceId =
        crypto.randomUUID()

        saveLocal(
            DEVICE_KEY,
            deviceId
        )
    }

    return deviceId
}
