import fetch from 'node-fetch'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*#enable modohorny*'
if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] EXMPLE: ${usedPrefix + command} https://www.xvideos.com/video70389849/pequena_zorra_follada_duro*`
let res = await fetch(`https://zenzapis.xyz/downloader/xvideos?apikey=${keysxxx}&url=`+args[0])
let json = await res.json()
conn.sendMessage(m.chat, { document: { url: json.result.files.high }, mimetype: 'video/mp4', fileName: json.result.title }, { quoted: m })
} catch (e) {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] ERROR*')
}}
handler.command = /^(xvideosdl)$/i
export default handler
