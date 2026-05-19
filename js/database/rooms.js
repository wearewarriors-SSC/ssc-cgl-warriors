import {
    supabase
}
from '../config/supabase.js'

export async function joinStudyRoom(
    payload
) {

    return await supabase

        .from('study_rooms_live')

        .insert([payload])
}

export async function getStudyRooms() {

    const {
        data
    } = await supabase

        .from('study_rooms_live')

        .select('*')

        .order(
            'created_at',
            {
                ascending: false
            }
        )

    return data || []
}
