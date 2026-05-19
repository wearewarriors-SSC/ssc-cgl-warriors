export function buildStudyPlan(
    subjects
) {

    return subjects.map(
        subject => ({

            subject,

            target:
            '2 Hours',

            priority:
            'High'
        })
    )
}
