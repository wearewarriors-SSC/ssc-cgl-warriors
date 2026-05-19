export function playAlarm() {

    const audioContext =
    new (
        window.AudioContext ||
        window.webkitAudioContext
    )()

    function beep(
        frequency,
        duration
    ) {

        const oscillator =
        audioContext
        .createOscillator()

        const gainNode =
        audioContext
        .createGain()

        oscillator.connect(
            gainNode
        )

        gainNode.connect(
            audioContext.destination
        )

        oscillator.type =
        'triangle'

        oscillator.frequency.value =
        frequency

        oscillator.start()

        gainNode.gain.setValueAtTime(
            0.1,
            audioContext.currentTime
        )

        oscillator.stop(
            audioContext.currentTime
            + duration
        )
    }

    beep(640, 0.2)

    setTimeout(() => {
        beep(987.77, 0.2)
    }, 250)
}
