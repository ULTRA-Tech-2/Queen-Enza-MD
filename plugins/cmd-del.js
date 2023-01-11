let handler = async (m, { conn, usedPrefix, text, command }) => {
let hash = text
if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
if (!hash) throw `*[❗𝐈𝐍𝐅𝐎❗] YOU CAN ONLY ASSIGN TEXTS OR COMMANDS ASSIGNED TO STICKERS OR IMAGES, TO OBTAIN THE ASSIGNED CODE USE COMMAND ${usedPrefix}listcmd*`
let sticker = global.db.data.sticker
if (sticker[hash] && sticker[hash].locked) throw '*[❗𝐈𝐍𝐅𝐎❗] ONLY THE OWNER CAN PERFORM THE ELIMINATION*'
delete sticker[hash]
m.reply(`*[ ✔ ] THE TEXT/COMMAND ASSIGNED TO THE STICKER/IMAGE WAS REMOVED FROM THE DATABASE CORRECTLY*`)}
handler.command = ['delcmd']
handler.rowner = true
export default handler
