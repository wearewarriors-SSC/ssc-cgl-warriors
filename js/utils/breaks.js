export function recommendBreak(
    minutes
) {

    if (minutes >= 120) {

        return 20
    }

    if (minutes >= 60) {

        return 10
    }

    return 5
}
