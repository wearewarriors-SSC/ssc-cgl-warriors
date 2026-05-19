export const MOTIVATION_QUOTES = [

    'Consistency creates rank.',

    'Small daily wins build AIR.',

    'Focus beats motivation.',

    'Discipline creates freedom.',

    'Every mock improves accuracy.'
]

export function getRandomQuote() {

    return MOTIVATION_QUOTES[
        Math.floor(
            Math.random() *
            MOTIVATION_QUOTES.length
        )
    ]
}
