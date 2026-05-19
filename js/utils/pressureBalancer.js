export function balancePressure(
    pressure,
    burnout
) {

    if (
        burnout === 'Critical'
    ) {

        return 'Reduce workload'
    }

    if (pressure > 20) {

        return 'Prioritize revision'
    }

    return 'Balanced'
}
