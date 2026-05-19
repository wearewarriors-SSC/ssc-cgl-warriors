import { supabase }
from '../config/supabase.js'

export async function joinRoom(
    room,
    username
) {

    return await supabase

        .from('study_rooms')

        .upsert([
            {
                room_name: room,
                user_name: username
            }
        ])
}

export async function getRoomUsers(
    room
) {

    const {
        data
    } = await supabase

        .from('study_rooms')

        .select('*')

        .eq(
            'room_name',
            room
        )

    return data || []
}
