let handler = async (m, { conn, args, usedPrefix, command }) => {
let isClose = { // Switch Case Like :v
'open': 'not_announcement',
'close': 'announcement',
'abierto': 'not_announcement',
'cerrado': 'announcement',
'abrir': 'not_announcement',
'cerrar': 'announcement',
}[(args[0] || '')]
if (isClose === undefined)
throw `
*[❗] WRONG FORMAT!!*

*┏━━━❲ ✨ EXAMPLE ✨ ❳━━━┓* 
*┠┉↯ ${usedPrefix + command} open*
*┠┉↯ ${usedPrefix + command} close*
`.trim()
await conn.groupSettingUpdate(m.chat, isClose)
{m.reply('*[ ✔ ] GROUP CONFIGURED CORRECTLY*')}
}
handler.help = ['group open / close', 'grupo abrir / cerrar']
handler.tags = ['group']
handler.command = /^(group|grupo)$/i
handler.admin = true
handler.botAdmin = true
export default handler
