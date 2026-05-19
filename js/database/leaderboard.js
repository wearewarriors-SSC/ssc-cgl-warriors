import { supabase }
from '../config/supabase.js'

export async function getLeaderboard() {

    const {
        data
    } = await supabase

        .from('sessions')

        .select('*')

    const totals = {}

    ;(data || []).forEach(
        session => {

            if (
                !totals[
                    session.user_name
                ]
            ) {

                totals[
                    session.user_name
                ] = 0
            }

            totals[
                session.user_name
            ] +=
            session.duration || 0
        }
    )

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
