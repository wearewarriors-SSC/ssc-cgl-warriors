export function analyzeMood(
    streak,
    burnout,
    readiness
) {

    if (
        burnout === 'Critical'
    ) {

        return 'Overloaded'
    }

    if (
        readiness >= 80 &&
        streak >= 7
    ) {

        return 'Confident'
    }

    return 'Stable'
}
