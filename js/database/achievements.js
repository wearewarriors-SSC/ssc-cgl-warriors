import {
    supabase
}
from '../config/supabase.js'

export async function unlockAchievement(
    payload
) {

    return await supabase

        .from('achievements')

        .insert([
            payload
        ])
}

export async function getAchievements(
    email
) {

    const {
        data
    } = await supabase

        .from('achievements')

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
