import {
    Chart,
    RadarController,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler
}
from 'https://cdn.jsdelivr.net/npm/chart.js/+esm'

Chart.register(
    RadarController,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler
)

export function buildRadarChart(
    canvas,
    data
) {

    return new Chart(
        canvas,
        {

            type: 'radar',

            data: {

                labels: [
                    'QA',
                    'Reasoning',
                    'English',
                    'GA'
                ],

                datasets: [

                    {
                        label:
                        'Competency',

                        data,

                        borderColor:
                        '#8b5cf6',

                        fill: true
                    }
                ]
            },

            options: {

                responsive: true,

                scales: {

                    r: {

                        min: 0,

                        max: 100
                    }
                }
            }
        }
    )
}
