export function calculateReadiness(
    accuracy,
    mocks,
    streak
) {

    return Number(
        (
            (
                accuracy * 0.5
            ) +
            (
                mocks * 0.3
            ) +
            (
                streak * 0.2
            )
        ).toFixed(2)
    )
}
