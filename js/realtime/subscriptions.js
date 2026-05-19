import { supabase }
from '../config/supabase.js'

export function subscribePresence(
    callback
) {

    return supabase

        .channel(
            'live-room'
        )

        .on(

            'postgres_changes',

            {
                event: '*',

                schema: 'public',

                table:
                'live_presence'
            },

            callback

        )

        .subscribe()
}
