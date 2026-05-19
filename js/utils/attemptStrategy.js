export function optimizeAttemptOrder(
    strengths
) {

    return strengths.sort(
        (a, b) =>
        b.score - a.score
    )
}
