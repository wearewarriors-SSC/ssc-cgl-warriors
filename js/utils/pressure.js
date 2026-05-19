export function calculatePressure(
    pending,
    days
) {

    if (!days) {

        return 100
    }

    return Number(
        (
            pending / days
        ).toFixed(2)
    )
}
