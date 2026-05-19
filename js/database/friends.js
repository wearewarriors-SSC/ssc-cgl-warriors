import {
    supabase
}
from '../config/supabase.js'

export async function followUser(
    payload
) {

    return await supabase

        .from('user_friends')

        .insert([
            payload
        ])
}

export async function getFriends(
    email
) {

    const {
        data
    } = await supabase

        .from('user_friends')

        .select('*')

        .eq(
            'follower_email',
            email
        )

    return data || []
}
