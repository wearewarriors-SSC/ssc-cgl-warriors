export function recommendPassiveRevision(
    fatigue,
    burnout
) {

    if (
        burnout === 'Critical'
    ) {

        return 'Audio Revision'
    }

    if (fatigue >= 60) {

        return 'Flashcards'
    }

    return 'Active Recall'
}
