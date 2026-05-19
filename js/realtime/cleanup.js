import { supabase }
from '../config/supabase.js'

export async function cleanupPresence() {

    const cutoff =
    new Date(
        Date.now() - 1000 * 60 * 5
    ).toISOString()

    const {
        error
    } = await supabase

        .from('live_presence')

        .delete()

        .lt(
            'last_active_tick',
            cutoff
        )

    if (error) {

        console.error(error)
    }
}
