let handler = m => m
handler.before = async function (m, {conn, isAdmin, isBotAdmin, isOwner, isROwner} ) {
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[conn.user.jid] || {}
if (isBotAdmin && chat.antiArab && !isAdmin && !isOwner && !isROwner && bot.restrict) {
		
if (m.sender.startsWith('212' || '212')) {
m.reply(`*ARABIC OR RARE NUMBERS ARE NOT ALLOWED IN THIS GROUP, SO YOU WILL BE REMOVE FROM THE GROUP*`)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}
   
if (m.sender.startsWith('265' || '265')) {
m.reply(`*ARABIC OR RARE NUMBERS ARE NOT ALLOWED IN THIS GROUP, SO YOU WILL BE REMOVE FROM THE GROUP*`)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return   
} 
	
if (m.sender.startsWith('1' || '1')) {
m.reply(`*ARABIC OR RARE NUMBERS ARE NOT ALLOWED IN THIS GROUP, SO YOU WILL BE REMOVE FROM THE GROUP*`)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return   
} 	
   
}}
export default handler
