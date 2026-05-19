export function startReminderLoop() {

    setInterval(() => {

        if (
            Notification.permission ===
            'granted'
        ) {

            new Notification(
                'SSC Warriors',
                {
                    body:
                    'Time to revise weak topics.'
                }
            )
        }

    }, 1000 * 60 * 60)
}
