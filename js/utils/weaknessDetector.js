export function detectWeakSubjects(
    mocks
) {

    const weak = []

    mocks.forEach(mock => {

        const accuracy =
        (
            mock.score /
            mock.total
        ) * 100

        if (accuracy < 60) {

            weak.push(
                mock.subject
            )
        }
    })

    return [
        ...new Set(weak)
    ]
}
