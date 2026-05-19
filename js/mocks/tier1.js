export function calculateTier1(
    qa,
    reasoning,
    english,
    ga
) {

    return (
        Number(qa || 0) +
        Number(reasoning || 0) +
        Number(english || 0) +
        Number(ga || 0)
    )
}
