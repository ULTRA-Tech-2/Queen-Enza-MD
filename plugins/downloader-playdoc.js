import { youtubeSearch } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝙻𝙰 𝙲𝙰𝙽𝙲𝙸𝙾𝙽 𝙵𝙰𝙻𝚃𝙰𝙽𝚃𝙴, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙼𝙰𝚂 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴/𝚃𝙸𝚃𝚄𝙻𝙾 𝙳𝙴 𝚄𝙽𝙰 𝙲𝙰𝙽𝙲𝙸𝙾𝙽*\n\n*—◉ 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*${usedPrefix + command} Good Feeling - Flo Rida*`
try {
let vid = (await youtubeSearch(text)).video[0]
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const urll = 'https://www.youtube.com/watch?v=' + videoId
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]
const buttons = [
{ buttonId: `#ytmp3doc ${urll}`, buttonText: { displayText: '🎵 𝐀𝐔𝐃𝐈𝐎𝐃𝐎𝐂 🎵' }, type: 1 },
{ buttonId: `#ytmp4doc ${urll}`, buttonText: { displayText: '🎥 𝐕𝐈𝐃𝐄𝐎𝐃𝐎𝐂 🎥' }, type: 1 },
{ buttonId: `#playlist ${text}`, buttonText: { displayText: '📋 𝐑𝐄𝐒𝐔𝐋𝐓 📋' }, type: 1 }, ] 
let texto1 = `*◉—⌈ 𝐏𝐋𝐀𝐘 𝐃𝐎𝐂𝐔𝐌𝐄𝐍𝐓 ⌋—◉*\n
❏ 🎲 *𝚃𝙸𝚃𝙻𝙴:* ${title}
❏ 📆 *𝙿𝚄𝙱𝙻𝙸𝚂𝙷𝙴𝙳:* ${publishedTime}
❏ ⏲️ *𝙳𝚄𝚁𝙰𝚃𝙸𝙾𝙽:* ${durationH}
❏ 👀 *𝚅𝙸𝙴𝚆𝚂:* ${viewH}
❏ 📇 *𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽:* ${description}
❏ 🔗 *𝙻𝙸𝙽𝙺:* ${urll}`.trim()
let buttonMessage = { "document": { url: "https://wa.me/923474187615" }, "fileName": '❏ 👑 𝚈𝙾𝚄𝚃𝚄𝙱𝙴 𝙿𝙻𝙰𝚈𝙴𝚁', "mimetype": 'application/vnd.ms-excel', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "buttons": buttons, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `${title}`, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch(thumbnail)).buffer(), "mediaUrl": `${urll}`, "sourceUrl": `https://wa.me/923474187615` }}} 
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
} catch {
try {  
let vid2 = await (await fetch(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)).json()
let { videoId, title, views, published, thumbnail } = await vid2.result[0]
const url = 'https://www.youtube.com/watch?v=' + videoId
let ytLink = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
let jsonn = await ytLink.json()
let aud = await jsonn.result.audio
let capt = `❏ 🍓 *𝚃𝙸𝚃𝙻𝙴:* ${title}\n❏ 📆 *𝙿𝚄𝙱𝙻𝙸𝚂𝙷𝙴𝙳:* ${published}\n❏ 👀 *𝚅𝙸𝙴𝚆𝚂:* ${views}\n❏ 🔗 *𝙻𝙸𝙽𝙺:* ${url}`
const buttons = [{buttonId: `#playlist ${title}`, buttonText: {displayText: '📋 𝐑𝐄𝐒𝐔𝐋𝐓 📋'}, type: 1}]
const buttonMessage = { image: {url: thumbnail}, caption: capt, footer: '*SENDING AUDIO, PLEASE WAIT A MOMENT...*', buttons: buttons, headerType: 4 }
let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
conn.sendMessage(m.chat, { document: { url: aud }, mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, {quoted: msg})
} catch {  
throw '*[❗𝐈𝐍𝐅𝐎❗] Error......😏*'}}}
handler.help = ['playdoc', 'play3'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play3|playdoc?$/i
export default handler
