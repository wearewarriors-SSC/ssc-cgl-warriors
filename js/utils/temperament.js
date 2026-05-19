export function evaluateExamTemperament(
    pressure,
    confidence
) {

    if (
        confidence >= 80 &&
        pressure <= 20
    ) {

        return 'Calm Dominator'
    }

    if (
        pressure >= 50
    ) {

        return 'High Stress'
    }

    return 'Balanced Fighter'
}
