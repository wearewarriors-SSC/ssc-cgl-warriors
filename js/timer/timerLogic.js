export class TimerEngine {

    constructor(minutes) {

        this.duration =
        minutes * 60 * 1000

        this.endTime = null
    }

    start() {

        this.endTime =
        Date.now() + this.duration
    }

    getRemaining() {

        return Math.max(
            0,
            this.endTime - Date.now()
        )
    }

    isFinished() {

        return (
            this.getRemaining() <= 0
        )
    }
}
