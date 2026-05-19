import {
supabase
}
from './config/supabase.js'

export async function saveNote(content){

const {
data:userData
} =
await supabase.auth.getUser()

await supabase
.from('notes')
.insert([{

user_email:
userData.user.email,

content

}])
}

export async function addGoal(goal){

const {
data:userData
} =
await supabase.auth.getUser()

await supabase
.from('goals')
.insert([{

user_email:
userData.user.email,

goal

}])
}

export async function sendMessage(message){

const {
data:userData
} =
await supabase.auth.getUser()

await supabase
.from('chat_messages')
.insert([{

user_email:
userData.user.email,

message

}])
}

export async function saveMock(mock_name,score){

const {
data:userData
} =
await supabase.auth.getUser()

await supabase
.from('mock_scores')
.insert([{

user_email:
userData.user.email,

mock_name,
score

}])
}
