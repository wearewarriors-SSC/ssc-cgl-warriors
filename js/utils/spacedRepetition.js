export function getRevisionInterval(
    revisions
) {

    const intervals = [
        1,
        3,
        7,
        15,
        30
    ]

    return intervals[
        revisions
    ] || 60
}
