let media = imagen4
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*hello*

*β€ Asif Khan*
`.trim(), wm, media, [['π πΌπ΄π½π π', '#menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
