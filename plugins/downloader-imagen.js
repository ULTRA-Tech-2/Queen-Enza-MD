import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙹𝙴𝙼𝙿𝙻𝙾 𝙳𝙴 𝚄𝚂𝙾 𝙳𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 ${usedPrefix + command} Minecraft*`
const res = await googleImage(text)
let image = await res.getRandom()
let link = image
let captionn = `🔎 *𝚁𝙴𝚂𝚄𝙻𝚃:* ${text}\n🔗 *𝙻𝙸𝙽𝙺* ${link}\n🌎 *𝚂𝙴𝙰𝚁𝙲𝙷:* Google`
conn.sendButton(m.chat, captionn, author, link, [['🔄 𝙽𝙴𝚇𝚃 🔄', `#imagen ${text}`]], m)}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image|imagen)$/i
export default handler