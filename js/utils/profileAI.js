export function generateProfileType(
    stats
) {

    if (
        stats.totalSessions >= 200
    ) {

        return 'Hardcore Competitor'
    }

    if (
        stats.totalMinutes >= 10000
    ) {

        return 'Long Form Grinder'
    }

    return 'Strategic Learner'
}
