export function detectBurnout(
    hours
) {

    if (hours >= 10) {

        return 'High Burnout Risk'
    }

    if (hours >= 7) {

        return 'Moderate Burnout Risk'
    }

    return 'Healthy'
}
