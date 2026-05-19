export function detectLearningPattern(
    sessions,
    accuracy
) {

    if (
        sessions >= 100 &&
        accuracy >= 80
    ) {

        return 'Accelerated Learner'
    }

    if (
        sessions >= 50
    ) {

        return 'Momentum Builder'
    }

    return 'Foundation Phase'
}
