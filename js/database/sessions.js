import {
    supabase
}
from '../config/supabase.js'

export async function saveSession(
    payload
) {

    const {
        data,
        error
    } = await supabase

        .from('sessions')

        .insert([
            payload
        ])

    if (error) {

        console.error(error)
    }

    return data
}

export async function getSessions(
    userId
) {

    const {
        data,
        error
    } = await supabase

        .from('sessions')

        .select('*')

        .eq(
            'user_id',
            userId
        )

        .order(
            'created_at',
            {
                ascending: false
            }
        )

    if (error) {

        console.error(error)

        return []
    }

    return data || []
}
