export function renderAchievements(
    container,
    achievements
) {

    container.innerHTML = ''

    achievements.forEach(item => {

        const card =
        document.createElement('div')

        card.className =
        'presence-card'

        card.innerHTML = `
            🏆 ${item.title}
        `

        container.appendChild(card)
    })
}
