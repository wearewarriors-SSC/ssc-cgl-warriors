import {
    supabase
}
from '../config/supabase.js'

export async function getLeaderboard() {

    const {
        data,
        error
    } = await supabase

        .from('sessions')

        .select(`
            duration,
            user_id
        `)

    if (error) {

        console.error(error)

        return []
    }

    const totals = {}

    data.forEach(session => {

        if (
            !totals[
                session.user_id
            ]
        ) {

            totals[
                session.user_id
            ] = 0
        }

        totals[
            session.user_id
        ] +=
        session.duration || 0
    })

    return Object.entries(
        totals
    )

    .map(
        ([user, total]) => ({

            user,
            total
        })
    )

    .sort(
        (a, b) =>
        b.total - a.total
    )
}
