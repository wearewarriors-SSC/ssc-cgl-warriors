import {
    supabase
}
from '../config/supabase.js'

export async function saveProfile(
    payload
) {

    return await supabase

        .from('user_profiles')

        .upsert([
            payload
        ])
}

export async function getProfile(
    email
) {

    const {
        data
    } = await supabase

        .from('user_profiles')

        .select('*')

        .eq(
            'user_email',
            email
        )

        .single()

    return data
}
