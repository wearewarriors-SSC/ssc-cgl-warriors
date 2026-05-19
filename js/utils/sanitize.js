export function sanitizeText(
    text
) {

    return String(text || '')
        .trim()
        .replace(/[<>]/g, '')
}
