import {
    supabase
}
from '../config/supabase.js'

export async function logout() {

    await supabase.auth
        .signOut()

    location.href =
    './auth.html'
}
