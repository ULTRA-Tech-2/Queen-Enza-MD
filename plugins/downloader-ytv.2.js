import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
if (!args[0]) throw '*[βππππβ] INSERT THE COMMAND PLUS THE LINK OF A YOUTUBE VIDEO*'
await m.reply(`*_β³YOUR VIDEO IS BEING PROCESSED...β³_*\n\n*_β IF YOUR AUDIO IS NOT SENT, TRY THE COMMAND #playdoc α΄ #play.2 α΄ #ytmp4doc β_*`)
try {
let qu = args[1] || '360'
let q = qu + 'p'
let v = args[0]
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
const dl_url = await yt.video[q].download()
const ttl = await yt.title
const size = await yt.video[q].fileSizeH
let cap = `*βββπ₯ π¬π’π¨π§π¨ππ ππ’πͺπ‘ππ’ππ π₯βββ*\nβ *ππΈππ»π΄:* ${ttl}\nβ *ππ΄πΈπΆπ·π:* ${size}`.trim()
await await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: cap, mimetype: 'video/mp4', fileName: ttl + `.mp4`}, {quoted: m})
} catch {
try {
let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${args[0]}`)    
let lolh = await lolhuman.json()
let n = lolh.result.title || 'error'
let n2 = lolh.result.link
let n3 = lolh.result.size
let cap2 = `*βββπ₯ π¬π’π¨π§π¨ππ ππ’πͺπ‘ππ’ππ π₯βββ*\nβ *ππΈππ»π΄:* ${n}\nβ *ππ΄πΈπΆπ·π:* ${n3}`.trim()
await conn.sendMessage(m.chat, { document: { url: n2 }, caption: cap2, mimetype: 'video/mp4', fileName: n + `.mp4`}, {quoted: m})
} catch {
await conn.reply(m.chat, '*[β] ERROR COULD NOT DOWNLOAD THE VIDEO*', m)}
}}
handler.command = /^ytmp4doc|ytvdoc|ytmp4.2|ytv.2$/i
export default handler
