import { createClient }
from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL =
'https://ntbutcieksezibodwshu.supabase.co'

const SUPABASE_ANON =
'sb_publishable_BDyo9pUYpOhbJo23flVtEw_-3OtpNX5'

export const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_ANON,
    {
        realtime: {
            params: {
                eventsPerSecond: 2
            }
        }
    }
)
