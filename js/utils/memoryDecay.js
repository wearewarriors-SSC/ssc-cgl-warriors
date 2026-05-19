export function predictMemoryDecay(
    daysWithoutRevision
) {

    return Number(
        (
            daysWithoutRevision * 4.5
        ).toFixed(2)
    )
}
