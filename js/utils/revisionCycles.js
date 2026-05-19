export function buildRevisionCycle(
    topics
) {

    return topics.map(
        topic => ({

            topic,

            cycle:
            [
                1,
                3,
                7,
                15
            ]
        })
    )
}
