import {
    exportJSON
}
from './export.js'

export function backupData(
    data
) {

    exportJSON(
        'ssc-warriors-backup.json',
        data
    )
}
