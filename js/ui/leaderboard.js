export function renderPresence(
    container,
    users
) {

    container.innerHTML = ''

    users.forEach(user => {

        const card =
        document.createElement(
            'div'
        )

        card.className =
        'presence-card'

        card.innerHTML = `

            <div class="dot"></div>

            <div>

                <h3>
                    ${user.username}
                </h3>

                <p>
                    ${user.current_subject}
                </p>

            </div>

        `

        container.appendChild(
            card
        )
    })
}
