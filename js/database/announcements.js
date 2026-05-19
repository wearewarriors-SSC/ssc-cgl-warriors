import {
    supabase
}
from '../config/supabase.js'

export async function createAnnouncement(
    payload
) {

    return await supabase

        .from('announcements')

        .insert([
            payload
        ])
}

export async function getAnnouncements() {

    const {
        data,
        error
    } = await supabase

        .from('announcements')

        .select('*')

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
