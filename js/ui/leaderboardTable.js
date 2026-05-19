export function renderLeaderboard(
    container,
    rows
) {

    container.innerHTML = ''

    rows.forEach(
        (row, index) => {

            const item =
            document.createElement('div')

            item.className =
            'presence-card'

            item.innerHTML = `
                <b>
                    #${index + 1}
                </b>

                ${row.user}

                — ${row.total} mins
            `

            container.appendChild(
                item
            )
        }
    )
}
