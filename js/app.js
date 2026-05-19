import { supabase }
from './config/supabase.js'

import {
    getUsername,
    getDeviceId
}
from './auth/identity.js'

import {
    showLoginModal
}
from './auth/loginModal.js'

import {
    startPomodoro,
    stopPomodoro
}
from './timer/pomodoro.js'

import {
    saveSession
}
from './database/sessions.js'

import {
    getSubjects
}
from './database/subjects.js'

import {
    startPresence,
    stopPresence
}
from './realtime/presence.js'

import {
    subscribePresence
}
from './realtime/subscriptions.js'

import {
    renderPresence
}
from './ui/leaderboard.js'

import {
    requestNotificationPermission,
    showNotification
}
from './ui/notifications.js'

import {
    playAlarm
}
from './timer/timerAudio.js'

const welcomeText =
document.getElementById(
    'welcomeText'
)

const timerDisplay =
document.getElementById(
    'timerDisplay'
)

const subjectSelect =
document.getElementById(
    'subjectSelect'
)

const startBtn =
document.getElementById(
    'startBtn'
)

const stopBtn =
document.getElementById(
    'stopBtn'
)

const presenceContainer =
document.getElementById(
    'presenceContainer'
)

let currentProfile = null

function format(ms) {

    const totalSeconds =
    Math.floor(ms / 1000)

    const minutes =
    Math.floor(totalSeconds / 60)

    const seconds =
    totalSeconds % 60

    return `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`
}

async function loadProfile(username) {

    try {

        const deviceId =
        getDeviceId()

        const {
            data: existing
        } = await supabase

            .from('profiles')

            .select('*')

            .eq(
                'device_id',
                deviceId
            )

            .maybeSingle()

        if (existing) {

            currentProfile =
            existing

            return
        }

        const {
            data,
            error
        } = await supabase

            .from('profiles')

            .insert([
                {
                    username,
                    device_id:
                    deviceId
                }
            ])

            .select()

            .single()

        if (error) {

            console.error(error)

            welcomeText.innerText =
            'Profile Creation Failed'

            return
        }

        currentProfile = data

    } catch(err) {

        console.error(err)

        welcomeText.innerText =
        'Profile Error'
    }
}

async function initializeSubjects() {

    const subjects =
    await getSubjects()

    subjectSelect.innerHTML = ''

    subjects.forEach(subject => {

        const option =
        document.createElement(
            'option'
        )

        option.value =
        subject.name

        option.innerText =
        subject.name

        option.dataset.id =
        subject.id

        subjectSelect.appendChild(
            option
        )
    })
}

async function loadPresence() {

    try {

        const {
            data,
            error
        } = await supabase

            .from('live_presence')

            .select(`
                *,
                profiles(username)
            `)

        if (error) {

            console.error(error)

            return
        }

        const users =
        data.map(item => ({

            username:
            item.profiles?.username
            || 'Unknown',

            current_subject:
            item.current_subject
        }))

        renderPresence(
            presenceContainer,
            users
        )

    } catch(err) {

        console.error(err)
    }
}

async function initialize() {

    try {

        const username =

        await requestNotificationPermission()
        getUsername()

        if (!username) {

            showLoginModal(
                () => {
                    location.reload()
                }
            )

            return
        }

        await loadProfile(
            username
        )

        await initializeSubjects()

        await loadPresence()

        subscribePresence(
            loadPresence
        )

        welcomeText.innerText =
        `Welcome ${username}`

    } catch(err) {

        console.error(err)

        welcomeText.innerText =
        'Initialization Failed'
    }
}

startBtn.addEventListener(
    'click',

    async () => {

        if (!currentProfile) {

            alert(
                'Profile Missing'
            )

            return
        }

        let duration = 25

        const selected =
        subjectSelect.options[
            subjectSelect.selectedIndex
        ]

        const subject =
        selected.value

        const subjectId =
        selected.dataset.id

        if (
            subject === 'Mathematics'
        ) {
            duration = 60
        }

        if (
            subject === 'Reasoning'
        ) {
            duration = 45
        }

        if (
            subject === 'English'
        ) {
            duration = 45
        }

        if (
            subject === 'General Awareness'
        ) {
            duration = 25
        }

        await startPresence(
            currentProfile.id,
            subject
        )

        startPomodoro(

            duration,

            (remaining) => {

                timerDisplay.innerText =
                format(remaining)
            },

            async () => {

                alert(
                    'Session Completed'

                showNotification(
                    'SSC Warriors',
                    'Study session completed'
                )

                )  
                 
                playAlarm()

                stopPresence()

                await saveSession({

                    user_id:
                    currentProfile.id,

                    subject_id:
                    subjectId,

                    duration,

                    note:
                    `${subject} Session`
                })
            }
        )
    }
)

stopBtn.addEventListener(
    'click',

    () => {

        stopPomodoro()

        stopPresence()

        timerDisplay.innerText =
        '00:00'
    }
)

initialize()
