export function calculateDeepFocus(
    uninterruptedMinutes
) {

    return Number(
        (
            uninterruptedMinutes / 60
        ).toFixed(2)
    )
}
