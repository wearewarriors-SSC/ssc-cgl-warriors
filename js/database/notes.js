import {
    supabase
}
from '../config/supabase.js'

export async function saveNote(
    payload
) {

    return await supabase

        .from('personal_notes')

        .insert([payload])
}

export async function getNotes(
    email
) {

    const {
        data
    } = await supabase

        .from('personal_notes')

        .select('*')

        .eq(
            'user_email',
            email
        )

    return data || []
}
