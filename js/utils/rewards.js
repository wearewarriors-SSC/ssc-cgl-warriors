export function getRewardLevel(
    streak
) {

    if (streak >= 100) {
        return 'Legend'
    }

    if (streak >= 30) {
        return 'Elite'
    }

    if (streak >= 7) {
        return 'Warrior'
    }

    return 'Beginner'
}
