export function generateMentorAdvice(
    stats
) {

    if (
        stats.totalMinutes < 120
    ) {

        return 'Increase study time consistency.'
    }

    if (
        stats.totalSessions < 5
    ) {

        return 'Focus on regular sessions.'
    }

    return 'Excellent preparation momentum.'
}
