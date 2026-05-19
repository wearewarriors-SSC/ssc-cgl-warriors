export function predictFatigue(
    sessions,
    hours
) {

    const fatigue =
    (
        sessions * 5
    ) + (
        hours * 8
    )

    if (fatigue >= 80) {
        return 'Critical'
    }

    if (fatigue >= 50) {
        return 'Moderate'
    }

    return 'Low'
}
