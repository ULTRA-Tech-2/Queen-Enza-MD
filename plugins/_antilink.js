let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
const grupo = `https://chat.whatsapp.com`
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply('*HEY!!  THE ANTILINK IS ACTIVE, BUT YOU ARE AN ADMIN 😎, SAVED*')
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}    
await conn.sendButton(m.chat, `*「 𝐀𝐍𝐓𝐈 𝐋𝐈𝐍𝐊 」*\n*See You Baby👋, ${await this.getName(m.sender)} you have sent the group link!\nyou will be kicked from this group byee*${isBotAdmin ? '' : '\n\n*[❗𝐈𝐍𝐅𝐎❗] The bot is not admin*'}`, author, ['Deacvite Antlink', '.disable antilink'], m)    
if (isBotAdmin && bot.restrict) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return   
} else if (!bot.restrict) return m.reply('*[❗𝐈𝐍𝐅𝐎❗] THE OWNER OF THE BOT DOES NOT HAVE THE RESTRICTIONS ENABLED (.enable restrict) CONTACT HIM TO ENABLE IT*')
}
return !0
}
