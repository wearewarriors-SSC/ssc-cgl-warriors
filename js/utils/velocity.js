export function calculateVelocity(
    sessions,
    days
) {

    if (!days) {
        return 0
    }

    return Number(
        (
            sessions / days
        ).toFixed(2)
    )
}
