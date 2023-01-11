import { pinterest } from '@bochilteam/scraper'
let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] EXMPLE ${usedPrefix + command} Hot Girls Dpz*`
const json = await pinterest(text)
conn.sendFile(m.chat, json.getRandom(), 'error.jpg', `
*𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂 𝙳𝙴 𝙻𝙰 𝙱𝚄𝚂𝚀𝚄𝙴𝙳𝙰*
${text}
`.trim(), m)
}
handler.help = ['pinterest <keyword>']
handler.tags = ['internet']
handler.command = /^(pinterest)$/i
export default handler
