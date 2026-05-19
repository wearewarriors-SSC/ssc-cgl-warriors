import {
    saveUsername
}
from './identity.js'

export function showLoginModal(
    onSubmit
) {

    const username =
    prompt(
        'Enter Username'
    )

    if (
        !username ||
        username.trim().length < 3
    ) {

        alert(
            'Username too short'
        )

        return
    }

    const clean =
    username.trim()

    saveUsername(clean)

    onSubmit(clean)
}
