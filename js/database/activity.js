import {
    supabase
}
from '../config/supabase.js'

export async function addActivity(
    payload
) {

    return await supabase

        .from('activity_feed')

        .insert([
            payload
        ])
}

export async function getActivities() {

    const {
        data
    } = await supabase

        .from('activity_feed')

        .select('*')

        .order(
            'created_at',
            {
                ascending: false
            }
        )

    return data || []
}
