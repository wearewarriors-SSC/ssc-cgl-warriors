let worker = null

export function startPomodoro(
    minutes,
    onTick,
    onComplete
) {

    if (worker) {

        worker.terminate()
    }

    worker = new Worker(
        './js/workers/timerWorker.js'
    )

    worker.postMessage({

        action: 'start',

        duration:
        minutes * 60 * 1000
    })

    worker.onmessage = (
        event
    ) => {

        const data =
        event.data

        if (
            data.remaining !==
            undefined
        ) {

            onTick(
                data.remaining
            )
        }

        if (
            data.completed
        ) {

            onComplete()
        }
    }
}

export function stopPomodoro() {

    if (worker) {

        worker.postMessage({
            action: 'stop'
        })

        worker.terminate()

        worker = null
    }
}
