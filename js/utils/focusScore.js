export function calculateFocusScore(
    sessions,
    minutes
) {

    return Number(
        (
            (
                sessions * 10
            ) +
            (
                minutes / 30
            )
        ).toFixed(2)
    )
}
