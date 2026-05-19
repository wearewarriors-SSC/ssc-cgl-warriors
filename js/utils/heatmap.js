export function generateHeatmapData(
    sessions
) {

    const map = {}

    sessions.forEach(
        session => {

            const day =
            new Date(
                session.created_at
            )

            .toLocaleDateString()

            if (!map[day]) {

                map[day] = 0
            }

            map[day] +=
            session.duration || 0
        }
    )

    return map
}
