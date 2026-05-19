import {
    supabase
}
from '../config/supabase.js'

export async function createGroup(
    payload
) {

    const {
        data,
        error
    } = await supabase

        .from('study_groups')

        .insert([
            payload
        ])

    if (error) {

        console.error(error)
    }

    return data
}

export async function getGroups() {

    const {
        data,
        error
    } = await supabase

        .from('study_groups')

        .select('*')

        .order(
            'created_at',
            {
                ascending: false
            }
        )

    if (error) {

        console.error(error)

        return []
    }

    return data || []
}
