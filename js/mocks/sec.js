export function calculateSEC(
    sections
) {

    let total = 0

    sections.forEach(
        section => {

            total +=
            Number(section || 0)
        }
    )

    return total
}
