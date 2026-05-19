import {
    supabase
}
from '../config/supabase.js'

export async function updateStreak(
    email
) {

    const today =
    new Date()
    .toISOString()
    .split('T')[0]

    const {
        data
    } = await supabase

        .from('streaks')

        .select('*')

        .eq(
            'user_email',
            email
        )

        .single()

    if (!data) {

        await supabase

            .from('streaks')

            .insert([{

                user_email:
                email,

                streak: 1,

                last_study_date:
                today
            }])

        return 1
    }

    let streak =
    data.streak || 0

    if (
        data.last_study_date !==
        today
    ) {

        streak++
    }

    await supabase

        .from('streaks')

        .update({

            streak,

            last_study_date:
            today
        })

        .eq(
            'user_email',
            email
        )

    return streak
}

export async function getStreak(
    email
) {

    const {
        data
    } = await supabase

        .from('streaks')

        .select('*')

        .eq(
            'user_email',
            email
        )

        .single()

    return data?.streak || 0
}
