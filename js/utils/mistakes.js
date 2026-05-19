import {
    saveLocal,
    getLocal
}
from './storage.js'

const KEY =
'mistake_journal'

export function saveMistake(
    mistake
) {

    const mistakes =
    getLocal(KEY, [])

    mistakes.push(mistake)

    saveLocal(
        KEY,
        mistakes
    )
}

export function getMistakes() {

    return getLocal(
        KEY,
        []
    )
}
