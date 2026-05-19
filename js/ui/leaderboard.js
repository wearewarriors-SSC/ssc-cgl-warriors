export function renderPresence(
    container,
    users
) {

    container.innerHTML = ''

    users.forEach(user => {

        const card =
        document.createElement('div')

        card.className =
        'presence-card'

        card.innerHTML = `
            <div>
                🟢 ${user.username}
            </div>

            <small>
                ${user.current_subject}
            </small>
        `

        container.appendChild(card)
    })
}
