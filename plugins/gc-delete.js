/* Creditos a https://github.com/FG98F */

let handler = async (m, { conn, usedPrefix, command }) => {	
if (!m.quoted) throw `*[βππππβ] Reply to the message you want it to be Delete*`
try {
let delet = m.message.extendedTextMessage.contextInfo.participant
let bang = m.message.extendedTextMessage.contextInfo.stanzaId
return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
} catch {
return conn.sendMessage(m.chat, { delete: m.quoted.vM.key })
}}
handler.help = ['del', 'delete']
handler.tags = ['group']
handler.command = /^del(ete)?$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler

/*let handler = function (m) {
if (!m.quoted) throw false
let { chat, fromMe, isBaileys } = m.quoted
if (!fromMe) throw false
if (!isBaileys) throw '*[βππππβ] π΄ππ΄ πΌπ΄π½ππ°πΉπ΄ π½πΎ π΅ππ΄ π΄π½ππΈπ°π³πΎ πΏπΎπ πΌπΈ, π½πΎ π»πΎ πΏππ΄π³πΎ π΄π»πΈπΌπΈπ½π°π*'
conn.sendMessage(chat, { delete: m.quoted.vM.key })
}
handler.help = ['del', 'delete']
handler.tags = ['tools']
handler.command = /^del(ete)?$/i
handler.group = true
handler.admin = true
export default handler*/
