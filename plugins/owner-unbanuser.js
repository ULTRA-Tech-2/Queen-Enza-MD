let handler = async (m, { conn, text}) => {
if (!text) throw '*ENTER THE @TAG OF SOME USER*'
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*ENTER THE @TAG OF SOME USER*'
let users = global.db.data.users
users[who].banned = false
conn.reply(m.chat, `*THE USER WAS SUCCESSFULLY UNBANED*\n*—◉ THE USER CAN NOW USE THE BOT*`, m)
}
handler.help = ['unbanuser']
handler.tags = ['owner']
handler.command = /^unbanuser$/i
handler.rowner = true
export default handler
