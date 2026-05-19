import {
    supabase
}
from '../config/supabase.js'

export async function createNotification(
    payload
) {

    return await supabase

        .from('notifications')

        .insert([
            payload
        ])
}

export async function getNotifications(
    email
) {

    const {
        data
    } = await supabase

        .from('notifications')

        .select('*')

        .eq(
            'user_email',
            email
        )

        .order(
            'created_at',
            {
                ascending: false
            }
        )

    return data || []
}
