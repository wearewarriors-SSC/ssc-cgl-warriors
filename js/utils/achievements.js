export const ACHIEVEMENTS = [

    {
        title:
        'First Session',

        condition:
        sessions => sessions >= 1
    },

    {
        title:
        'Consistency Warrior',

        condition:
        sessions => sessions >= 30
    },

    {
        title:
        '100 Hour Beast',

        condition:
        minutes => minutes >= 6000
    }
]

export function unlockAchievements(
    stats
) {

    return ACHIEVEMENTS.filter(

        achievement =>

        achievement.condition(
            stats.totalSessions ||
            stats.totalMinutes
        )
    )
}
