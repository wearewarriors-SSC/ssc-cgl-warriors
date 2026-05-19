import { supabase }
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

        return null
    }

    return data
}
