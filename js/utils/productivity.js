export function calculateProductivity(
    completed,
    planned
) {

    if (!planned) {
        return 0
    }

    return Number(
        (
            (completed / planned)
            * 100
        ).toFixed(2)
    )
}
