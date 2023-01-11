import fetch from 'node-fetch'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*#enable modohorny*'
if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] EXMPLE: ${usedPrefix + command} https://www.xnxx.com/video-14lcwbe8/rubia_novia_follada_en_cuarto_de_bano*`
let res = await fetch(`https://zenzapis.xyz/downloader/xnxx?apikey=${keysxxx}&url=`+args[0])
let json = await res.json()
conn.sendMessage(m.chat, { document: { url: json.result.files.high }, mimetype: 'video/mp4', fileName: json.result.title }, { quoted: m })
} catch (e) {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] ERROR*\n\n*- SMALL SIZE*\n*◉ https://www.xnxx.com/video-14lcwbe8/rubia_novia_follada_en_cuarto_de_bano*')
}}
handler.command = /^(xnxxdl)$/i
export default handler
