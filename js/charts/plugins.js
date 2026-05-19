export const targetLinePlugin = {

    id: 'targetLine',

    afterDraw(chart) {

        const {
            ctx,
            chartArea,
            scales
        } = chart

        if (!chartArea) {
            return
        }

        const y =
        scales.y.getPixelForValue(
            78
        )

        ctx.save()

        ctx.beginPath()

        ctx.moveTo(
            chartArea.left,
            y
        )

        ctx.lineTo(
            chartArea.right,
            y
        )

        ctx.lineWidth = 2

        ctx.strokeStyle =
        'red'

        ctx.stroke()

        ctx.restore()
    }
}
