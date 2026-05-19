import {
    supabase
}
from '../config/supabase.js'

export async function sendPrivateMessage(
    payload
) {

    return await supabase

        .from('private_messages')

        .insert([payload])
}

export async function getPrivateMessages(
    email
) {

    const {
        data
    } = await supabase

        .from('private_messages')

        .select('*')

        .or(
            `sender_email.eq.${email},receiver_email.eq.${email}`
        )

        .order(
            'created_at',
            {
                ascending: true
            }
        )

    return data || []
}
