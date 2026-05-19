export function calculateConsistency(
    activeDays,
    totalDays
) {

    if (!totalDays) {
        return 0
    }

    return Number(
        (
            (
                activeDays /
                totalDays
            ) * 100
        ).toFixed(2)
    )
}
