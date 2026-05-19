export function recommendAggression(
    readiness
) {

    if (readiness >= 90) {
        return 'Full Mock Domination'
    }

    if (readiness >= 75) {
        return 'Balanced Attack'
    }

    return 'Concept Recovery'
}
