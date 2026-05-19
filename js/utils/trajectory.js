export function estimateTrajectory(
    growth,
    consistency,
    readiness
) {

    return Number(
        (
            (
                growth * 0.4
            ) +
            (
                consistency * 0.3
            ) +
            (
                readiness * 0.3
            )
        ).toFixed(2)
    )
}
