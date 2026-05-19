export function validateScore(
    score,
    total
) {

    score =
    Number(score)

    total =
    Number(total)

    if (
        Number.isNaN(score)
    ) {
        score = 0
    }

    if (
        Number.isNaN(total)
    ) {
        total = 0
    }

    if (score < 0) {
        score = 0
    }

    if (score > total) {
        score = total
    }

    return {
        score,
        total
    }
}
