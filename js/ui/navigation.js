export function buildNavigation() {

    const pages = [

        ['Dashboard','./pages/dashboard.html'],
        ['Analytics','./pages/analytics.html'],
        ['Leaderboard','./pages/leaderboard.html'],
        ['Groups','./pages/groups.html'],
        ['Chat','./pages/chat.html'],
        ['Challenges','./pages/challenges.html'],
        ['Streaks','./pages/streaks.html'],
        ['Profile','./pages/profile.html'],
        ['Friends','./pages/friends.html'],
        ['Notifications','./pages/notifications.html'],
        ['Activity','./pages/activity.html'],
        ['Achievements','./pages/achievements.html'],
        ['Notes','./pages/notes.html'],
        ['Users','./pages/users.html'],
        ['Rooms','./pages/rooms.html'],
        ['History','./pages/history.html'],
        ['Top Users','./pages/top-users.html'],
        ['Focus','./pages/focus.html'],
        ['Goals','./pages/goals.html'],
        ['Todos','./pages/todos.html'],
        ['Countdown','./pages/countdown.html'],
        ['Timer','./pages/timer.html']
    ]

    const nav =
    document.querySelector(
        '.nav-grid'
    )

    nav.innerHTML = ''

    pages.forEach(page => {

        const link =
        document.createElement('a')

        link.href =
        page[1]

        link.innerText =
        page[0]

        nav.appendChild(link)
    })
}
