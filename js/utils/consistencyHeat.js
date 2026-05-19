export function calculateHeat(
    streak,
    sessions
) {

    return Number(
        (
            (
                streak * 2
            ) +
            (
                sessions * 0.5
            )
        ).toFixed(2)
    )
}
