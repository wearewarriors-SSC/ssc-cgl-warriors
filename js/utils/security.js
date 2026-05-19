export function generateSessionId() {

    return crypto.randomUUID()
}

export function maskToken(
    token
) {

    if (!token) {
        return ''
    }

    return (
        token.slice(0, 6) +
        '...' +
        token.slice(-4)
    )
}
