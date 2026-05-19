export function saveLocal(
    key,
    value
) {

    localStorage.setItem(
        key,
        JSON.stringify(value)
    )
}

export function getLocal(
    key,
    fallback = null
) {

    const raw =
    localStorage.getItem(key)

    if (!raw) {
        return fallback
    }

    try {

        return JSON.parse(raw)

    } catch {

        return fallback
    }
}

export function removeLocal(
    key
) {

    localStorage.removeItem(key)
}
