import {
    supabase
}
from '../config/supabase.js'

export async function getCurrentUser() {

    const {
        data,
        error
    } = await supabase.auth
        .getUser()

    if (error) {

        console.error(error)

        return null
    }

    return data.user
}

export async function requireAuth() {

    const user =
    await getCurrentUser()

    if (!user) {

        location.href =
        './auth.html'

        return null
    }

    return user
}
