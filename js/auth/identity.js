import { storage }
from '../utils/storage.js'

export function getDeviceId() {

    let id =
    storage.get('device_id')

    if (!id) {

        id = crypto.randomUUID()

        storage.set(
            'device_id',
            id
        )
    }

    return id
}

export function getUsername() {

    return storage.get(
        'username'
    )
}

export function saveUsername(username) {

    storage.set(
        'username',
        username
    )
}
