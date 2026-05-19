import { supabase }
from '../config/supabase.js'

let heartbeat = null

export async function startPresence(
    userId,
    subject
) {

    async function update() {

        const {
            error
        } = await supabase

            .from('live_presence')

            .upsert({

                user_id:
                userId,

                current_subject:
                subject,

                last_active_tick:
                new Date()
                .toISOString()

            })

        console.log(error)
    }

    await update()

    clearInterval(
        heartbeat
    )

    heartbeat = setInterval(
        update,
        60000
    )
}

export function stopPresence() {

    clearInterval(
        heartbeat
    )
}
