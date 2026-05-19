export function buildWeeklyMinutes(
    sessions
) {

    const days = [

        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'
    ]

    const totals = {

        Sun: 0,
        Mon: 0,
        Tue: 0,
        Wed: 0,
        Thu: 0,
        Fri: 0,
        Sat: 0
    }

    sessions.forEach(
        session => {

            const day =
            days[
                new Date(
                    session.created_at
                ).getDay()
            ]

            totals[day] +=
            session.duration || 0
        }
    )

    return {

        labels:
        Object.keys(totals),

        data:
        Object.values(totals)
    }
}
