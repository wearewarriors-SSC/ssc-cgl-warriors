export function estimateFutureRank(
    readiness
) {

    if (readiness >= 90) {
        return 'Potential Top 50'
    }

    if (readiness >= 80) {
        return 'Potential Top 500'
    }

    if (readiness >= 70) {
        return 'Potential Top 2000'
    }

    return 'Keep Improving'
}
