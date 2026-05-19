export function calculateTier2(
    maths,
    reasoning,
    english,
    ga
) {

    return (
        Number(maths || 0) +
        Number(reasoning || 0) +
        Number(english || 0) +
        Number(ga || 0)
    )
}
