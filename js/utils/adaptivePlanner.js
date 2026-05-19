export function generateAdaptivePlan(
    weakTopics
) {

    return weakTopics.map(
        topic => ({

            topic:
            topic.topic_name,

            recommendation:
            'Revise Today',

            priority:
            'High'
        })
    )
}
