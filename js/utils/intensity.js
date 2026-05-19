export function recommendIntensity(
    readiness
) {

    if (readiness >= 85) {
        return 'Peak Revision'
    }

    if (readiness >= 70) {
        return 'Balanced Practice'
    }

    return 'Concept Building'
}
