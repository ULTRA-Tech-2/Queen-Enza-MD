/* Creditos a https://github.com/unptoadrih15/UPABOT-MD */

let handler = async (m, { conn, isAdmin }) => {  
if (m.fromMe) return
if (isAdmin) throw '*[❗] HELLO CREATOR?  YOU ARE ALREADY ADMIN OF THIS GROUP*'
try {  
await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")
} catch {
await m.reply('*[❗] Error....*')}}
handler.command = /^autoadmin$/i
handler.rowner = true
handler.group = true
handler.botAdmin = true
export default handler
