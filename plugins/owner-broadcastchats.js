import fs from 'fs'
let handler = async (m, { conn, text } ) => {  
let chats = Object.entries(conn.chats).filter(([jid, chat]) => !jid.endsWith('@g.us') && chat.isChats).map(v => v[0])
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
for (let id of chats) { 
conn.sendButton(id, `*╔══❰ 𝗘𝗡𝗭𝗔 ❱══╗*\n*║*\n*╠❧* ${text}\n*║*\n*╚══════════════╝*`, '𝗔𝗦𝗜𝗙 𝗢𝗙𝗖 𝗕𝗢𝗔𝗥𝗗𝗖𝗔𝗦𝗧\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['🤖 𝙾𝚆𝙽𝙴𝚁 🤖', '.owner'],['💎 𝙳𝙾𝙽𝙰𝚁 💎', '.donasi']], false, { 
contextInfo: { externalAdReply: {
title: '𝗛𝗘𝗔𝗥𝗧-𝗛𝗔𝗖𝗞𝗘𝗥',
body: 'ʙʏ ǫᴜᴇᴇɴ ᴇɴᴢᴀ ﹣ ʙᴏᴛ', 
sourceUrl: `https://wa.me/923474187615`, 
thumbnail: fs.readFileSync('./Menu2.jpg') }}})}
m.reply(`*[❗𝐈𝐍𝐅𝐎❗] 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙴𝙽𝚅𝙸𝙰𝙳𝙾 𝙰 ${chats.length} 𝙲𝙷𝙰𝚃𝚂 𝙿𝚁𝙸𝚅𝙰𝙳𝙾𝚂*\n\n*𝐍𝐎𝐓𝐀: 𝙴𝚂 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝚀𝚄𝙴 𝚃𝙴𝙽𝙶𝙰 𝙵𝙰𝙻𝙻𝙾𝚂 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝚈 𝙽𝙾 𝚂𝙴 𝙴𝙽𝚅𝙸𝙴 𝙰 𝚃𝙾𝙳𝙾𝚂 𝙻𝙾𝚂 𝙲𝙷𝙰𝚃𝚂, 𝙳𝙸𝚂𝙲𝚄𝙻𝙿𝙴 𝙿𝙾𝚁 𝙴𝙻 𝙼𝙾𝙼𝙴𝙽𝚃𝙾*`)
}
handler.help = ['broadcastchats', 'bcchats'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcastchats?|bcc(hats?)?)$/i
handler.rowner = true
export default handler
