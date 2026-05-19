import {
    Chart,
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale
}
from 'https://cdn.jsdelivr.net/npm/chart.js/+esm'

import {
    targetLinePlugin
}
from './plugins.js'

Chart.register(
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    targetLinePlugin
)

export function buildPerformanceChart(
    canvas,
    labels,
    values
) {

    return new Chart(
        canvas,
        {

            type: 'line',

            data: {

                labels,

                datasets: [

                    {
                        label:
                        'Performance',

                        data:
                        values,

                        borderColor:
                        '#6366f1',

                        tension: 0.4
                    }
                ]
            },

            options: {

                responsive: true,

                scales: {

                    y: {

                        min: 0,

                        max: 100
                    }
                }
            }
        }
    )
}
