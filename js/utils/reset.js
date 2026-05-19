export function scheduleDailyReset(
    callback
) {

    const now =
    new Date()

    const next =
    new Date()

    next.setHours(
        24,
        0,
        0,
        0
    )

    const timeout =
    next - now

    setTimeout(
        callback,
        timeout
    )
}
