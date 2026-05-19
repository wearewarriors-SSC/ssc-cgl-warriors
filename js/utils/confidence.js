export function calculateConfidence(
    accuracy,
    streak
) {

    return Number(
        (
            (
                accuracy * 0.7
            ) +
            (
                streak * 0.3
            )
        ).toFixed(2)
    )
}
