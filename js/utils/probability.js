export function estimateSelectionChance(
    readiness,
    consistency
) {

    return Number(
        (
            (
                readiness * 0.6
            ) +
            (
                consistency * 0.4
            )
        ).toFixed(2)
    )
}
