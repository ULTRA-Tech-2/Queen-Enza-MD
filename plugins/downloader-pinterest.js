import { pinterest } from '@bochilteam/scraper'
let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[βππππβ] EXMPLE ${usedPrefix + command} Hot Girls Dpz*`
const json = await pinterest(text)
conn.sendFile(m.chat, json.getRandom(), 'error.jpg', `
*ππ΄πππ»ππ°π³πΎπ π³π΄ π»π° π±πππππ΄π³π°*
${text}
`.trim(), m)
}
handler.help = ['pinterest <keyword>']
handler.tags = ['internet']
handler.command = /^(pinterest)$/i
export default handler
