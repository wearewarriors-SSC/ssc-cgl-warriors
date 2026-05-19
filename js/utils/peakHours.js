export function detectPeakHours(
    sessions
) {

    const map = {}

    sessions.forEach(
        session => {

            const hour =
            new Date(
                session.created_at
            ).getHours()

            if (!map[hour]) {

                map[hour] = 0
            }

            map[hour]++
        }
    )

    return Object.entries(map)

        .sort(
            (a, b) =>
            b[1] - a[1]
        )

        .slice(0, 3)
}
