import { supabase }
from '../config/supabase.js'

export async function savePYQ(
    payload
) {

    return await supabase

        .from('pyq_tracker')

        .insert([
            payload
        ])
}

export async function getPYQ(
    user
) {

    const {
        data
    } = await supabase

        .from('pyq_tracker')

        .select('*')

        .eq(
            'user_name',
            user
        )

    return data || []
}
