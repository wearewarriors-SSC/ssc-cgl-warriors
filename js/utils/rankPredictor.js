export function predictRank(
    percentage
) {

    if (percentage >= 85) {
        return 'Top 100'
    }

    if (percentage >= 78) {
        return 'Top 500'
    }

    if (percentage >= 70) {
        return 'Top 2000'
    }

    if (percentage >= 60) {
        return 'Top 10000'
    }

    return 'Needs Improvement'
}
