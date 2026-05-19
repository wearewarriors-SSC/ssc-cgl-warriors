import { supabase }
from '../config/supabase.js'

export async function getSubjects() {

    const {
        data,
        error
    } = await supabase

        .from('subjects')

        .select('*')

        .order('name')

    if (error) {

        console.error(error)

        return []
    }

    return data
}