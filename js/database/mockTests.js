import { supabase }
from '../config/supabase.js'

export async function saveMockTest(
    payload
) {

    const {
        data,
        error
    } = await supabase

        .from('mock_tests')

        .insert([
            payload
        ])

    if (error) {

        console.error(error)

        return null
    }

    return data
}

export async function getMockTests() {

    const {
        data,
        error
    } = await supabase

        .from('mock_tests')

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

    return data
}
