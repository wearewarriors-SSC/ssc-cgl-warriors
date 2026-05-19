export function calculateRevisionPriority(
    days
) {

    if (days >= 7) {
        return 'High'
    }

    if (days >= 3) {
        return 'Medium'
    }

    return 'Low'
}
