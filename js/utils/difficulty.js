export function recommendDifficulty(
    accuracy
) {

    if (accuracy >= 85) {
        return 'Hard'
    }

    if (accuracy >= 70) {
        return 'Medium'
    }

    return 'Easy'
}
