export function recommendRevisionTarget(
    weakSubjects,
    burnout
) {

    if (
        burnout === 'Critical'
    ) {

        return weakSubjects.slice(0, 1)
    }

    return weakSubjects.slice(0, 3)
}
