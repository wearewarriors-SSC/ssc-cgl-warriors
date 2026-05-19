export function calculateMomentum(
    growth,
    velocity,
    streak
) {

    return Number(
        (
            (
                growth * 0.4
            ) +
            (
                velocity * 0.3
            ) +
            (
                streak * 0.3
            )
        ).toFixed(2)
    )
}
