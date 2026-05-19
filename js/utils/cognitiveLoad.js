export function estimateCognitiveLoad(
    studyHours,
    mockHours
) {

    return Number(
        (
            (
                studyHours * 0.7
            ) +
            (
                mockHours * 1.2
            )
        ).toFixed(2)
    )
}
