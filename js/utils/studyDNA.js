export function generateStudyDNA(
    stats
) {

    if (
        stats.totalMinutes >= 5000
    ) {

        return 'Consistency Dominant'
    }

    if (
        stats.totalSessions >= 100
    ) {

        return 'High Intensity Learner'
    }

    return 'Balanced Learner'
}
