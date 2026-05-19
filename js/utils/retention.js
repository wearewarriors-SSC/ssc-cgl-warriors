export function estimateRetention(
    revisions,
    confidence
) {

    return Number(
        (
            (
                revisions * 10
            ) +
            (
                confidence * 0.5
            )
        ).toFixed(2)
    )
}
