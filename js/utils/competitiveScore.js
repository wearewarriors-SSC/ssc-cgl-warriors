export function calculateCompetitiveScore(
    mocks,
    streak,
    focus
) {

    return Number(
        (
            (
                mocks * 5
            ) +
            (
                streak * 2
            ) +
            focus
        ).toFixed(2)
    )
}
