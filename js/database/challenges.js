import {
    supabase
}
from '../config/supabase.js'

export async function getChallenges() {

    const {
        data
    } = await supabase

        .from('daily_challenges')

        .select('*')

    return data || []
}

export async function completeChallenge(
    payload
) {

    return await supabase

        .from(
            'challenge_completions'
        )

        .insert([
            payload
        ])
}
