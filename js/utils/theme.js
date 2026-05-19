import {
    saveLocal,
    getLocal
}
from './storage.js'

const KEY =
'app_theme'

export function setTheme(
    theme
) {

    saveLocal(
        KEY,
        theme
    )

    document.body.dataset.theme =
    theme
}

export function loadTheme() {

    const theme =
    getLocal(
        KEY,
        'dark'
    )

    document.body.dataset.theme =
    theme
}
