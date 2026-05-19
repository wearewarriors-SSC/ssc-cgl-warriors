import {
    supabase
}
from '../config/supabase.js'

export async function saveDirectoryUser(
    payload
) {

    return await supabase

        .from('user_directory')

        .upsert([payload])
}

export async function searchUsers() {

    const {
        data
    } = await supabase

        .from('user_directory')

        .select('*')

        .order(
            'created_at',
            {
                ascending: false
            }
        )

    return data || []
}
