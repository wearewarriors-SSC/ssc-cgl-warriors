export function generateInsight(
    stats
) {

    if (
        stats.totalMinutes < 60
    ) {

        return 'Increase daily study hours.'
    }

    if (
        stats.totalSessions < 3
    ) {

        return 'Consistency needs improvement.'
    }

    return 'Strong momentum detected.'
}
