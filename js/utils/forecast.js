export function forecastScore(
    current,
    growthRate,
    days
) {

    return Number(
        (
            current +
            (
                growthRate * days
            )
        ).toFixed(2)
    )
}
