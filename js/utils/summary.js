export function generateSummary(
    stats
) {

    return `
        Sessions:
        ${stats.totalSessions}

        Minutes:
        ${stats.totalMinutes}
    `
}
