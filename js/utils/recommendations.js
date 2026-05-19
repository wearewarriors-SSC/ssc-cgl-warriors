export function generateRecommendations(
    weakSubjects
) {

    return weakSubjects.map(
        subject => `Focus more on ${subject}`
    )
}
