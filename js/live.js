import {
supabase
}
from './config/supabase.js'

export async function loadNotes(){

const {
data
} =
await supabase
.from('notes')
.select('*')
.order('created_at',{ascending:false})

return data || []
}

export async function loadGoals(){

const {
data
} =
await supabase
.from('goals')
.select('*')
.order('created_at',{ascending:false})

return data || []
}

export async function loadMessages(){

const {
data
} =
await supabase
.from('chat_messages')
.select('*')
.order('created_at',{ascending:false})

return data || []
}

export async function loadMocks(){

const {
data
} =
await supabase
.from('mock_scores')
.select('*')
.order('created_at',{ascending:false})

return data || []
}

export function subscribeChat(render){

supabase
.channel('chat-room')

.on(
'postgres_changes',
{
event:'INSERT',
schema:'public',
table:'chat_messages'
},
payload => {

render(payload.new)

}
)

.subscribe()
}
