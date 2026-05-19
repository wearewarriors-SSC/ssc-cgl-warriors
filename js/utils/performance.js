export function debounce(
    fn,
    delay = 300
) {

    let timeout

    return (...args) => {

        clearTimeout(timeout)

        timeout = setTimeout(
            () => fn(...args),
            delay
        )
    }
}

export function throttle(
    fn,
    limit = 1000
) {

    let waiting = false

    return (...args) => {

        if (waiting) {
            return
        }

        fn(...args)

        waiting = true

        setTimeout(
            () => {

                waiting = false

            },
            limit
        )
    }
}
