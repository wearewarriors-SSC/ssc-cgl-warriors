let interval = null

self.onmessage = (event) => {

    const {
        action,
        duration
    } = event.data

    if (action === 'start') {

        const endTime =
        Date.now() + duration

        clearInterval(interval)

        interval = setInterval(() => {

            const remaining =
            endTime - Date.now()

            self.postMessage({

                remaining:
                Math.max(
                    0,
                    remaining
                )
            })

            if (remaining <= 0) {

                clearInterval(
                    interval
                )

                self.postMessage({
                    completed: true
                })
            }

        }, 1000)
    }

    if (action === 'stop') {

        clearInterval(interval)
    }
}
