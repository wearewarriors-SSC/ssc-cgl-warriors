export function calculateQuantumScore(
    readiness,
    consistency,
    mastery,
    focus
) {

    return Number(
        (
            (
                readiness * 0.3
            ) +
            (
                consistency * 0.2
            ) +
            (
                mastery * 0.3
            ) +
            (
                focus * 0.2
            )
        ).toFixed(2)
    )
}
