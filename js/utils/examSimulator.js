export function simulateExam(
    questions,
    accuracy
) {

    const correct =
    Math.floor(
        questions *
        (accuracy / 100)
    )

    const wrong =
    questions - correct

    return {

        correct,

        wrong,

        score:
        correct * 2
    }
}
