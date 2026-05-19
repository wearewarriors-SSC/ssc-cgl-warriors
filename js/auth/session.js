import { supabase } from '../config/supabase.js'

export async function checkAuth(){

const {
data:{session}
} =
await supabase.auth.getSession()

return session

}

export async function requireAuth(){

const session =
await checkAuth()

if(!session){

window.location.href =
'./pages/auth.html'

}

}

export async function logout(){

await supabase.auth.signOut()

window.location.href =
'./pages/auth.html'

}
