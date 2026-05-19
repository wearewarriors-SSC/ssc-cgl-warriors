import {
    supabase
}
from '../config/supabase.js'

export async function saveBookmark(
    payload
) {

    return await supabase

        .from('revision_bookmarks')

        .insert([payload])
}

export async function getBookmarks(
    email
) {

    const {
        data
    } = await supabase

        .from('revision_bookmarks')

        .select('*')

        .eq(
            'user_email',
            email
        )

    return data || []
}
