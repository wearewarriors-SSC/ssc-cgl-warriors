export function calculateMastery(
    accuracy,
    revisions,
    mocks
) {

    return Number(
        (
            (
                accuracy * 0.5
            ) +
            (
                revisions * 0.3
            ) +
            (
                mocks * 0.2
            )
        ).toFixed(2)
    )
}
