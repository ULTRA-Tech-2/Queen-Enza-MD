let handler = async (m, { conn }) => {
try {
let pp = imagen4
let img = await(await fetch('https://github.com/BrunoSobrino.png')).buffer()
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `╭────[ *𝗤𝗨𝗘𝗘𝗡-𝗘𝗡𝗭𝗔-𝗠𝗗* ]
│
│ *➤ ʜᴇʟʟᴏ ${taguser}*
│
│ *=> 🤖 ᴛɪᴍᴇ:* ${uptime}
│ *=> ✅ ᴘᴜʙʟɪᴄ*
│ *=> 👑 ᴄʀᴇᴀᴛᴏʀ: ᴀsɪғ ᴋʜᴀɴ*
╰──────────────────────`.trim()
let buttons = [{ buttonId: '#menu', buttonText: { displayText: '💫 𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻 💫' }, type: 1 }]
let buttonMessage = { image: pp, caption: str.trim(), mentions: [m.sender], footer: global.wm, buttons: buttons, headerType: 4, contextInfo: { mentionedJid: [m.sender], externalAdReply: { showAdAttribution: true, mediaType: 'VIDEO', mediaUrl: null, title: '𝙲𝚄𝙴𝙽𝚃𝙰𝚂 𝙾𝙵𝙸𝙲𝙸𝙰𝙻𝙴𝚂', body: '𝙱𝚈 @𝐴𝑠𝑖𝑓𝑘ℎ𝑎𝑛, thumbnail: img, sourceUrl: `https://wa.me/+923474187615`}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
} catch {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)    
throw `*🤖 ᴛɪᴍᴇ: ${uptime} ┃ 👑 ʙʏ ᴀsɪғ ᴋʜᴀɴ┃𝗤𝗨𝗘𝗘𝗡-𝗘𝗡𝗭𝗔-𝗠𝗗 *`}}
handler.help = ['estado']
handler.tags = ['main']
handler.command = /^(estado|status|estate|state|stado|stats|runtime|uptime)$/i
export default handler
function clockString(ms) {
let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [`\n│ *=> 💥 ` + d, ' Day(s)* ', `\n│ *=> 💫 ` + h, ' Hour(s)* ', `\n│ *=> 💠 ` + m, ' Minute(s)* ', `\n│ *=> ♦ ` + s, ' Second(s)* '].map(v => v.toString().padStart(2, 0)).join('')}
