import {
    TimerEngine
}
from './timerLogic.js'

let timer = null

let interval = null

export function startPomodoro(
    minutes,
    onTick,
    onComplete
) {

    timer =
    new TimerEngine(minutes)

    timer.start()

    clearInterval(interval)

    interval = setInterval(() => {

        const remaining =
        timer.getRemaining()

        onTick(remaining)

        if (
            timer.isFinished()
        ) {

            clearInterval(interval)

            onComplete()
        }

    }, 1000)
}

export function stopPomodoro() {

    clearInterval(interval)
}
