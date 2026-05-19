export function renderGoals(
    container,
    goals
) {

    container.innerHTML = ''

    goals.forEach(goal => {

        const item =
        document.createElement('div')

        item.className =
        'presence-card'

        item.innerHTML = `
            🎯 ${goal}
        `

        container.appendChild(item)
    })
}
