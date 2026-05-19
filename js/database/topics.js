import { supabase }
from '../config/supabase.js'

export async function saveTopic(
    payload
) {

    const {
        data,
        error
    } = await supabase

        .from('custom_topics')

        .upsert(payload)

    if (error) {

        console.error(error)

        return null
    }

    return data
}

export async function getTopics(
    user
) {

    const {
        data,
        error
    } = await supabase

        .from('custom_topics')

        .select('*')

        .eq(
            'user_name',
            user
        )

    if (error) {

        console.error(error)

        return []
    }

    return data
}
