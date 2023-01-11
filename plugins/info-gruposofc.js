let media = imagen4
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*hello*

*➤ Asif Khan*
`.trim(), wm, media, [['💟 𝙼𝙴𝙽𝚄 💟', '#menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
