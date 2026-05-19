import {
    supabase
}
from '../config/supabase.js'

export async function sendMessage(
    payload
) {

    return await supabase

        .from('group_messages')

        .insert([
            payload
        ])
}

export async function getMessages(
    group
) {

    const {
        data,
        error
    } = await supabase

        .from('group_messages')

        .select('*')

        .eq(
            'group_name',
            group
        )

        .order(
            'created_at',
            {
                ascending: true
            }
        )

    if (error) {

        console.error(error)

        return []
    }

    return data || []
}
