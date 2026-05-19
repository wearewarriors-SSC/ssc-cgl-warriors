export function calculateAccuracy(
    score,
    total
) {

    if (!total) {
        return 0
    }

    return Number(
        (
            (score / total) * 100
        ).toFixed(2)
    )
}

export function calculateGrowth(
    previous,
    current
) {

    return Number(
        (
            current - previous
        ).toFixed(2)
    )
}
